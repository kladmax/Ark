#!/bin/bash
# ==================================================
# УНІВЕРСАЛЬНИЙ БЕКАП-СКРИПТ (v3.4 - Absolute Paths + Legacy Cleanup)
# ==================================================

set -euo pipefail

# 1. ВИЗНАЧЕННЯ ШЛЯХІВ (абсолютно надійно)
SCRIPT_PATH=$(readlink -f "$0")
SCRIPT_DIR=$(dirname "$SCRIPT_PATH")
PROJECT_ROOT=$(dirname "$SCRIPT_DIR")
MY_FOLDER_NAME=$(basename "$SCRIPT_DIR")

echo "📂 Папка скрипта: $SCRIPT_DIR"
echo "🏠 Корінь проекту: $PROJECT_ROOT"
echo "📦 Назва папки бекапу: $MY_FOLDER_NAME"

# 2. Видаляємо старий .gitignore всередині backup-project (залишок від v3.1)
if [ -f "$SCRIPT_DIR/.gitignore" ]; then
    rm -f "$SCRIPT_DIR/.gitignore"
    echo "🧹 Видалено застарілий .gitignore всередині backup-project/"
fi

# 3. Оновлення .gitignore ТІЛЬКИ в корені проекту
GITIGNORE="$PROJECT_ROOT/.gitignore"

update_gitignore() {
    local entries=("$MY_FOLDER_NAME/" "node_modules/" "target/")
    
    if [ ! -f "$GITIGNORE" ]; then
        echo "📄 Створюю новий .gitignore у $PROJECT_ROOT"
        touch "$GITIGNORE"
    fi

    for entry in "${entries[@]}"; do
        if ! grep -q "^$entry" "$GITIGNORE" 2>/dev/null; then
            echo "📝 Додаю $entry у .gitignore..."
            echo "$entry" >> "$GITIGNORE"
        fi
    done
}

update_gitignore

# 4. БЕКАП
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_PATH="$SCRIPT_DIR/backup_$TIMESTAMP"

echo "🚀 Починаю копіювання файлів у бекап..."

mkdir -p "$BACKUP_PATH"

rsync -av \
  --exclude=".git" \
  --exclude="node_modules" \
  --exclude="target" \
  --exclude="$MY_FOLDER_NAME" \
  "$PROJECT_ROOT/" "$BACKUP_PATH/"

echo "✅ Бекап готовий: $MY_FOLDER_NAME/backup_$TIMESTAMP"

# 5. GIT-БЕКАП (без перемикання гілок)
cd "$PROJECT_ROOT" || exit 1
if [ -d ".git" ]; then
    git add .
    if git commit -m "BACKUP: $TIMESTAMP" --quiet; then
        git branch "backup-$TIMESTAMP"
        echo "✅ Створено Git-гілку бекапу: backup-$TIMESTAMP"
    else
        echo "ℹ️ Немає нових змін для коміту"
    fi
else
    echo "⚠️ Git-репозиторій не знайдено"
fi

echo "🎉 Операція завершена успішно! .gitignore у корені проекту."