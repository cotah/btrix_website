# 🎉 Site BTRIX - Atualização Completa

## ✅ O que foi feito

### 1. Substituição de Imagens de Robô

Todas as imagens de ícones de robô foram substituídas por fotos reais do robô BTRIX trabalhando em diferentes contextos:

**Imagens adicionadas:**
- `robot-barber.png` - Robô em barbearia (Pack Essential)
- `robot-retail.png` - Robô em varejo (Seção Contact)
- `robot-restaurant.png` - Robô em restaurante (Pack Pro)
- `robot-salon.png` - Robô em salão de beleza (HowItWorks)
- `robot-spa.png` - Robô em spa (Future)
- `robot-sushi.png` - Robô em restaurante japonês (VoiceAI)
- `robot-bike-shop.png` - Robô em oficina de bicicletas (HowItWorks)
- `robot-office.png` - Robô em escritório (Hero)
- `robot-pet-shop.png` - Robô em pet shop
- `robot-cafe.png` - Robô em café (ValueProposition)
- `robot-factory.png` - Robô em fábrica (About - background)
- `robot-warehouse.png` - Robô em armazém (About - principal)
- `robot-mexican-restaurant.png` - Robô em restaurante mexicano
- `robot-clothing-store.png` - Robô em loja de roupas

**Seções atualizadas:**
- ✅ Hero - Imagem principal do robô no escritório
- ✅ About - Robô em armazém e fábrica (background)
- ✅ ValueProposition - Robô em café (background)
- ✅ HowItWorks - Robôs em salão e oficina de bicicletas
- ✅ Packs - Imagens específicas para cada pack (barbearia, restaurante, armazém)
- ✅ Contact - Robô em varejo (background)
- ✅ Future - Robô em spa (background)
- ✅ VoiceAI - Robô em restaurante japonês (background)

### 2. Integração do Widget de Chatbot

Foi integrado o widget de chatbot do repositório `cotah/ai-chatbot-plataform`:

**Arquivos criados:**
- `components/BtrixChatbot.tsx` - Componente principal do chatbot adaptado para Next.js
- `components/chatbot/` - Componentes originais do chatbot (backup)
- `lib/chatbot/api.js` - Serviço de API do chatbot
- `.env.local` - Configuração da URL da API do chatbot

**Características do chatbot:**
- 🤖 Botão flutuante no canto inferior direito
- 💬 Interface de chat moderna com design BTRIX
- 🎨 Cores e estilo integrados com o site
- 🌐 Suporte multilíngue (inglês, português, espanhol)
- ⚡ Comunicação com API do backend do chatbot

## 📦 Estrutura do Projeto

```
btrix site/
├── app/
│   ├── layout.tsx          # Layout principal (chatbot adicionado aqui)
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── BtrixChatbot.tsx    # Componente do chatbot
│   ├── chatbot/            # Componentes originais do chatbot
│   ├── sections/           # Seções do site (atualizadas)
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/
│   ├── data.ts             # Dados do site (imagens atualizadas)
│   └── chatbot/
│       └── api.js          # API do chatbot
├── public/
│   └── images/             # Todas as imagens do robô
└── .env.local              # Configuração do chatbot
```

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
cd "btrix site"
npm install
```

### 2. Configurar o Chatbot

Edite o arquivo `.env.local` e configure a URL da API do chatbot:

```env
NEXT_PUBLIC_CHATBOT_API_URL=https://sua-api-do-chatbot.com
```

**Importante:** Para o chatbot funcionar completamente, você precisa:
1. Fazer deploy do backend do chatbot (do repositório `cotah/ai-chatbot-plataform`)
2. Atualizar a URL no `.env.local` com a URL do backend em produção

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### 4. Build para Produção

```bash
npm run build
npm start
```

## 🔧 Configuração do Backend do Chatbot

Para fazer o chatbot funcionar completamente, você precisa configurar o backend:

### Opção 1: Executar Localmente

```bash
cd /caminho/para/ai-chatbot-plataform/backend
npm install
cp .env.example .env
# Configure as variáveis de ambiente no .env
npm start
```

### Opção 2: Deploy no Render/Vercel

Siga as instruções no README do repositório `cotah/ai-chatbot-plataform` para fazer deploy do backend.

Depois de fazer o deploy, atualize o `.env.local` do site com a URL do backend:

```env
NEXT_PUBLIC_CHATBOT_API_URL=https://seu-backend.onrender.com
```

## 📝 Notas Importantes

### Imagens
- Todas as imagens estão em formato PNG
- As imagens são otimizadas automaticamente pelo Next.js Image component
- Tamanho total das imagens: ~6MB

### Chatbot
- O chatbot é um componente client-side (`'use client'`)
- Funciona independentemente do resto do site
- Se a API do chatbot não estiver disponível, o botão ainda aparece mas mostra erro ao tentar enviar mensagens
- Para desabilitar o chatbot temporariamente, comente a linha `<BtrixChatbot />` no arquivo `app/layout.tsx`

### Performance
- Build concluído com sucesso ✅
- Apenas warnings do ESLint (não afetam funcionalidade)
- Site totalmente estático (SSG)
- Tempo de build: ~30 segundos

## 🎨 Customização do Chatbot

Para customizar o chatbot, edite o arquivo `components/BtrixChatbot.tsx`:

**Cores:**
- Botão: `from-btrix-neon to-btrix-accent`
- Header: `from-btrix-blue to-btrix-graphite`
- Mensagens do usuário: `from-btrix-neon to-btrix-accent`
- Mensagens do assistente: `bg-white`

**Textos:**
- Mensagem de boas-vindas: linha 58
- Título do header: linha 175
- Subtítulo: linha 176

## 📱 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

Adicione a variável de ambiente no painel da Vercel:
- `NEXT_PUBLIC_CHATBOT_API_URL`: URL do backend do chatbot

### Outros Serviços

O site pode ser hospedado em qualquer serviço que suporte Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- etc.

## 🐛 Troubleshooting

### Chatbot não funciona
- Verifique se a URL da API está correta no `.env.local`
- Verifique se o backend do chatbot está rodando
- Abra o console do navegador para ver erros

### Imagens não aparecem
- Verifique se a pasta `public/images` contém todas as imagens
- Limpe o cache do navegador
- Faça rebuild: `npm run build`

### Erro de build
- Delete `node_modules` e `.next`: `rm -rf node_modules .next`
- Reinstale: `npm install`
- Tente novamente: `npm run build`

## ✨ Próximos Passos

1. **Deploy do Backend do Chatbot**
   - Configure as variáveis de ambiente (OpenAI API key, etc.)
   - Faça deploy no Render ou outro serviço
   - Atualize a URL no `.env.local`

2. **Testes**
   - Teste o chatbot em diferentes dispositivos
   - Verifique se todas as imagens carregam corretamente
   - Teste a responsividade do site

3. **Otimizações Opcionais**
   - Adicionar analytics (Google Analytics, etc.)
   - Configurar SEO adicional
   - Adicionar mais idiomas ao chatbot

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique a documentação do Next.js: https://nextjs.org/docs
2. Verifique a documentação do chatbot no repositório `cotah/ai-chatbot-plataform`
3. Revise este documento

---

**Desenvolvido com ❤️ para BTRIX**

Data da atualização: 01/01/2026
