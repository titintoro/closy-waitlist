
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';

type FormValues = {
  name: string;
  email: string;
  age: number;
  city: string;
};

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      age: undefined as unknown as number,
      city: ''
    }
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormError(null);

    try {
      const { error } = await supabase.from('user').insert({
        name: data.name,
        email: data.email,
        age: data.age,
        city: data.city
      });
      
      if (error) throw error;
      
      toast({
        title: "¡Gracias por apuntarte!",
        description: "Te avisaremos cuando abramos el acceso.",
      });
      
      form.reset();
    } catch (error: any) {
      console.error('Error submitting waitlist form:', error);
      setFormError(error?.message || 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 px-4">
        <div className="max-w-[420px] mx-auto">
          <h1 className="title-castio text-3xl md:text-4xl text-center mb-8">Únete a nuestra lista de espera</h1>
          
          {formError && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{formError}</AlertDescription>
            </Alert>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <FormControl>
                      <Input 
                        id="name"
                        type="text" 
                        placeholder="Tu nombre" 
                        required 
                        {...field} 
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
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="ejemplo@correo.com" 
                        required 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="age">Edad</FormLabel>
                    <FormControl>
                      <Input 
                        id="age"
                        type="number" 
                        min="13" 
                        max="120" 
                        placeholder="Tu edad" 
                        required 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value) || '')}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="city">Ciudad de residencia</FormLabel>
                    <FormControl>
                      <Input 
                        id="city"
                        type="text" 
                        placeholder="Tu ciudad" 
                        required 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-closy-maroon hover:bg-closy-maroon/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Waitlist;
