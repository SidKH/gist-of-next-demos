import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold -mt-10 mb-5">Contact Form</h1>
      <ContactForm />
    </main>
  );
}
