# Bot Bíblico

Bot Bíblico é um projeto que envia versículos bíblicos diários via WhatsApp usando a API do Twilio.

## Estrutura do Projeto

```
.env
.gitignore
package.json
tsconfig.json
src/
    config.ts
    index.ts
    services/
        bibleService.ts
        twilioService.ts
```

## Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd bot-biblico
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
    ```env
    PORT=3000
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number
    ```

## Uso

Para iniciar o servidor em modo de desenvolvimento, execute:
```sh
npm run dev
```

O servidor estará rodando na porta definida no arquivo `.env` (por padrão, 3000).

## Endpoints

### POST /versiculo

Envia um versículo bíblico para o número de telefone fornecido.

**Parâmetros:**
- `phone` (string): Número de telefone para o qual o versículo será enviado.

**Exemplo de Requisição:**
```json
{
  "phone": "+5511999999999"
}
```

**Exemplo de Resposta:**
```json
{
  "message": "Versículo enviado!"
}
```

## Serviços

### BibleService

O serviço [`getBibleVerse`](src/services/bibleService.ts) busca um versículo bíblico aleatório e sua tradução na versão Almeida.

### TwilioService

O serviço [`sendWhatsAppMessage`](src/services/twilioService.ts) envia uma mensagem via WhatsApp usando a API do Twilio.

## Configuração do TypeScript

O projeto está configurado para usar TypeScript. As configurações do compilador estão no arquivo [`tsconfig.json`](tsconfig.json).

## Licença

Este projeto está licenciado sob a licença ISC.
