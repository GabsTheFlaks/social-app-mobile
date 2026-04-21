# Social App Mobile (Migração React PWA -> React Native)

Este é o repositório do aplicativo mobile desenvolvido em React Native (usando Expo), migrado a partir do projeto PWA (web). Ele utiliza Expo Router para navegação, NativeWind para estilização com Tailwind CSS, e Supabase como backend.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- Celular com o aplicativo [Expo Go](https://expo.dev/go) instalado (para testes físicos) ou Emulador/Simulador instalado na máquina.

## Passo a passo de Instalação e Testes

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GabsTheFlaks/social-app-mobile.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd social-app-mobile
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente:**
   - Copie o arquivo `.env.example` para um novo arquivo chamado `.env`:
     ```bash
     cp .env.example .env
     ```
   - Abra o arquivo `.env` e substitua `YOUR_SUPABASE_URL` e `YOUR_SUPABASE_ANON_KEY` pelas suas credenciais reais do Supabase (disponíveis no Dashboard do Supabase em Project Settings > API).

5. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npm start
   ```

   Ou se preferir limpar o cache do bundler (caso o NativeWind não aplique os estilos corretamente de primeira):
   ```bash
   npm start -- -c
   ```

6. **Como testar:**
   - Ao rodar o comando acima, um **QR Code** aparecerá no terminal.
   - Abra o aplicativo **Expo Go** no seu celular (Android ou iOS).
   - Escaneie o QR Code usando o Expo Go (ou o app da Câmera no iOS).
   - O aplicativo fará o build do JavaScript e abrirá na tela inicial.
   - Pressione "w" no terminal para rodar o app no navegador web (se quiser testar a responsividade do Expo Web).

## Arquivos e Estrutura Principal

- `app/`: Contém as rotas do aplicativo através do Expo Router.
- `global.css`: Arquivo raiz do NativeWind.
- `tailwind.config.js`: Configurações de tema e caminhos do Tailwind CSS.
- `babel.config.js` e `metro.config.js`: Configurados para suportar o Expo Router e NativeWind.

---
*Se tiver problemas ou quiser limpar o cache do projeto para evitar erros no Metro Bundler, lembre-se sempre do comando `npm start -- -c`!*