import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      challenge: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: (data) => {
      setShowSuccess(true);
      form.reset();
      toast({
        title: "Formulário enviado!",
        description: data.message,
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
  });

  const onSubmit = (data: InsertLead) => {
    submitMutation.mutate(data);
  };

  if (showSuccess) {
    return (
      <section id="contact-form" className="py-16 px-4" style={{ backgroundColor: 'hsl(var(--support))' }}>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center gap-3 text-green-800">
                <i className="fas fa-check-circle text-2xl"></i>
                <div>
                  <h3 className="font-semibold text-lg">Obrigado!</h3>
                  <p>Em breve um de nossos consultores vai entrar em contato com você via WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 px-4" style={{ backgroundColor: 'hsl(var(--support))' }}>
      <div className="max-w-2xl mx-auto fade-in">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Quero conversar com um consultor</h2>
          <p className="text-lg text-gray-600">Preencha os dados abaixo e nossa equipe entrará em contato</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Nome *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu nome completo" 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">Empresa</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Nome da sua empresa" 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">E-mail *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="seu@email.com" 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-primary">WhatsApp *</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="(11) 99999-9999" 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="challenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-primary">Qual o maior desafio hoje com dados?</FormLabel>
                    <FormControl>
                      <Textarea 
                        rows={4}
                        placeholder="Conte um pouco sobre suas principais dificuldades com dados e relatórios..." 
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                disabled={submitMutation.isPending}
                className="w-full btn-cta text-primary font-semibold py-4 px-8 rounded-lg text-lg shadow-lg flex items-center justify-center gap-3"
              >
                {submitMutation.isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin text-xl"></i>
                    Enviando...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane text-xl"></i>
                    Enviar e agendar conversa
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
