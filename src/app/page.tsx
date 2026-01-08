import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Shadcn UI Component Library
          </h1>
          <p className="text-xl text-[hsl(var(--color-muted-foreground))] mb-8">
            A curated collection of beautiful, accessible, and customizable components
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">View Registry</Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Button Component</CardTitle>
              <CardDescription>
                Versatile button with multiple variants and sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-x-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
              </div>
              <div className="space-x-2">
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
              </div>
              <div className="space-x-2">
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Component</CardTitle>
              <CardDescription>
                Flexible card container for content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This is a card component with header, content, and footer sections.
                Perfect for organizing content in a clean, structured way.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Input Component</CardTitle>
              <CardDescription>
                Accessible text input with proper styling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Password" type="password" />
              <Button className="w-full">Submit</Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Installation Instructions</CardTitle>
              <CardDescription>
                Use the Shadcn CLI to add components to your project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-950 text-slate-50 p-4 rounded-md font-mono text-sm space-y-2">
                <div># Add a component to your project</div>
                <div className="text-green-400">npx shadcn@latest add button --registry https://your-domain.vercel.app/registry</div>
                <div className="mt-4"># Or add multiple components</div>
                <div className="text-green-400">npx shadcn@latest add button card input --registry https://your-domain.vercel.app/registry</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Registry API</h2>
          <p className="text-[hsl(var(--color-muted-foreground))] mb-8">
            Components are available through our public registry
          </p>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="text-left space-y-2 font-mono text-sm">
                  <div><span className="text-[hsl(var(--color-muted-foreground))]">GET</span> /registry/index.json</div>
                  <div><span className="text-[hsl(var(--color-muted-foreground))]">GET</span> /registry/button.json</div>
                  <div><span className="text-[hsl(var(--color-muted-foreground))]">GET</span> /registry/card.json</div>
                  <div><span className="text-[hsl(var(--color-muted-foreground))]">GET</span> /registry/input.json</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
