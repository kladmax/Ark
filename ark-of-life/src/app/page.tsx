// src/app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="w-full max-w-md mx-auto bg-ark-black border-ark-red">
      <CardHeader>
        <CardTitle className="text-ark-red text-3xl text-center">Hello World!</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-300">Welcome to Ark of Life - Universal Software Ecosystem.</p>
      </CardContent>
    </Card>
  );
}