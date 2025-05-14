
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor, introduce un email válido"),
  phone: z.string().optional(),
  location: z.string().optional(),
});

interface PersonalInfoBlockProps {
  onComplete: (data: z.infer<typeof formSchema>) => void;
}

const PersonalInfoBlock = ({ onComplete }: PersonalInfoBlockProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    onComplete(data);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-castio text-3xl text-gray-800">
          Antes de empezar, cuéntanos un poco sobre ti
        </h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-gray-700">
                  <User size={18} className="text-closy-pink" />
                  Nombre
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Tu nombre" 
                    {...field} 
                    className="bg-white/50 border-gray-200 focus:border-closy-pink focus-visible:ring-closy-pink"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-gray-700">
                  <Mail size={18} className="text-closy-pink" />
                  Correo electrónico
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="tu@email.com" 
                    type="email" 
                    {...field}
                    className="bg-white/50 border-gray-200 focus:border-closy-pink focus-visible:ring-closy-pink"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-gray-700">
                  <Phone size={18} className="text-closy-pink" />
                  Número de teléfono (opcional)
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Tu teléfono" 
                    type="tel" 
                    {...field}
                    className="bg-white/50 border-gray-200 focus:border-closy-pink focus-visible:ring-closy-pink"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} className="text-closy-pink" />
                  Ciudad o lugar de residencia (opcional)
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Tu ciudad" 
                    {...field}
                    className="bg-white/50 border-gray-200 focus:border-closy-pink focus-visible:ring-closy-pink"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-closy-pink hover:bg-closy-maroon transition-all duration-300 mt-8 h-12"
          >
            Continuar
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PersonalInfoBlock;
