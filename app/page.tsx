import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(4),
});

export default function Home() {
  async function signup(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const validation = formSchema.safeParse({ email, password });
      if (!validation.success) {
        return { errors: "Validation error" };
      }
      redirect("/dashboard");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form
      action={signup}
      className="w-full h-screen flex justify-center items-center"
    >
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Enter your email below to sign up.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value="alex@gmail.com"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              value="1231231313"
              name="password"
              type="password"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign up</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
