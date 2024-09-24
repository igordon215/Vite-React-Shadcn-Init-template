// Import the Button component from the shadcn/ui library
// https://ui.shadcn.com/docs/components/button
// "Button" component is located in the local components/ui directory
import { Button } from "@/components/ui/button"
// Here is another example for Card
// Import the Card component from the shadcn/ui library
// https://ui.shadcn.com/docs/components/card
// "Card" component is located in the local components/ui directory
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function App() {
  return (
    <>
      {/* Render a Shadcn/ui Button component */}
      {/* This button uses the default styling provided by shadcn/ui */}
      <Button>Shadcn/ui Button</Button>

      {/* Render a Shadcn/ui Card component */}
      {/* This Card uses the default styling provided by shadcn/ui */}
      <div className="p-20">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>

    </>
  )
}

export default App
