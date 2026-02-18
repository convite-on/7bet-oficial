# 776BET - Cassino Online

Réplica do site de cassino online 776BET com sistema completo de cadastro, login e depósito via PIX.

## 🚀 Funcionalidades

### ✅ Implementadas

1. **Popup de Boas-Vindas**
   - Aparece automaticamente ao abrir o site
   - Mensagem totalmente editável (clique no ícone de lápis no header quando logado)

2. **Sistema de Cadastro/Login**
   - Cadastro com: Nome de usuário, E-mail e Senha
   - Dados salvos no localStorage (persistem após recarregar)
   - Após cadastro, o usuário aparece no header com ícone

3. **Botões de Jogos**
   - **Sem cadastro**: Abre popup pedindo para cadastrar
   - **Com cadastro, sem saldo**: Abre popup pedindo para depositar
   - **Com cadastro e saldo**: Pode jogar (integração futura)

4. **Sistema de Depósito PIX**
   - Valores disponíveis: R$ 20,00 | R$ 50,00 | R$ 75,00 | R$ 100,00 | R$ 200,00 | R$ 500,00
   - Ao clicar, redireciona para API de PIX

5. **Interface Completa**
   - Header com navegação
   - Banner rotativo com promoções
   - Categorias de jogos (Hot, Slots, Pescaria, Live Casino, Esportes)
   - Lista de jogos com cards
   - Últimos vencedores
   - Rodapé com informações

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── games/
│   │   ├── GameCard.tsx      # Card individual de jogo
│   │   └── GameList.tsx      # Lista de jogos
│   └── popups/
│       ├── WelcomePopup.tsx   # Popup de boas-vindas
│       ├── RegisterPopup.tsx  # Popup de cadastro
│       ├── DepositPopup.tsx   # Popup de depósito
│       ├── NeedRegisterPopup.tsx  # Popup "precisa cadastrar"
│       ├── NeedDepositPopup.tsx   # Popup "precisa depositar"
│       └── EditPopupMessage.tsx   # Editar mensagem do popup
├── sections/
│   ├── Header.tsx            # Cabeçalho do site
│   ├── Hero.tsx              # Banner principal
│   ├── GameCategories.tsx    # Categorias de jogos
│   ├── GamesSection.tsx      # Seção de jogos
│   ├── WinnersSection.tsx    # Últimos vencedores
│   ├── InfoSection.tsx       # Informações e promoções
│   └── Footer.tsx            # Rodapé
├── hooks/
│   ├── useAuth.ts            # Hook de autenticação
│   └── usePopup.ts           # Hook do popup
├── types/
│   └── index.ts              # Tipos TypeScript
└── App.tsx                   # Componente principal
```

## 🔧 Configuração

### 1. URL da API de PIX

Edite o arquivo `src/App.tsx` e altere a constante:

```typescript
const PIX_API_URL = 'https://sua-api-pix.com/pagamento';
```

### 2. Editar Mensagem do Popup

Quando estiver logado, clique no ícone de **lápis** no header para editar:
- Título do popup
- Mensagem
- Texto do botão

As alterações são salvas no localStorage.

## 💻 Como usar no GitHub

### 1. Criar repositório no GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/776bet.git
git push -u origin main
```

### 2. Configurar GitHub Pages

1. Vá em **Settings** > **Pages**
2. Em "Source", selecione **Deploy from a branch**
3. Selecione a branch **main** e pasta **/(root)**
4. Clique em **Save**

Ou use GitHub Actions para deploy automático:

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 📝 Editar com Sublime Text

1. Abra a pasta do projeto no Sublime:
   - File > Open Folder... > Selecione a pasta do projeto

2. Principais arquivos para editar:
   - `src/App.tsx` - Configurações gerais (URL da API PIX)
   - `src/sections/GamesSection.tsx` - Adicionar/remover jogos
   - `src/sections/Hero.tsx` - Editar banners
   - `src/components/popups/*.tsx` - Editar popups

3. Atalhos úteis:
   - `Ctrl+P` - Buscar arquivo
   - `Ctrl+Shift+F` - Buscar em todos os arquivos
   - `Ctrl+B` - Build (se configurado)

## 🎨 Personalização

### Cores

As cores principais estão em `src/index.css`:

```css
/* Gradiente principal */
bg-gradient-to-r from-yellow-500 to-orange-500

/* Cores de fundo */
bg-[#0a0a12]  /* Fundo principal */
bg-[#0f0f1a]  /* Fundo secundário */
bg-[#1a1a2e]  /* Cards/popups */
```

### Jogos

Para adicionar novos jogos, edite `src/sections/GamesSection.tsx`:

```typescript
const hotGames: Game[] = [
  { 
    id: 'novo-jogo', 
    name: 'Nome do Jogo', 
    image: 'URL_DA_IMAGEM', 
    isHot: true 
  },
  // ...
];
```

## 🚀 Deploy

### Build local:
```bash
npm run build
```

O build será gerado na pasta `dist/`.

### Deploy no GitHub Pages:
Após configurar o workflow, todo push na branch main irá automaticamente fazer o deploy.

## 📱 Responsivo

O site é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🔒 Segurança

- Dados de usuário salvos apenas no localStorage (navegador)
- Senhas não são criptografadas (apenas para demonstração)
- Em produção, use um backend real com criptografia

## 📞 Suporte

Para dúvidas ou suporte, entre em contato via Telegram.

---

⚠️ **Aviso**: Este projeto é para fins educacionais. Apostas online podem ser restritas em algumas regiões.
