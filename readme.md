Sistema de Reservas de Salas

## Descrição

O Sistema de Reservas de Salas é uma aplicação web desenvolvida para facilitar a reserva e o gerenciamento de salas. Ele permite que usuários autenticados reservem salas para datas e horários específicos, visualizem o histórico de reservas e recebam notificações. Administradores podem gerenciar salas e usuários, garantindo um controle eficiente do sistema.

## Funcionalidades

- **Autenticação de Usuários**: Login e registro seguro via Supabase Auth.  
- **Reserva de Salas**: Seleção de salas, datas e horários disponíveis.  

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js (Express)  
- **Banco de Dados**: PostgreSQL (Supabase)  
- **Autenticação e Hospedagem**: Supabase Auth, Supabase DB

## Requisitos

- Node.js 16+  
- Conta no Supabase (para autenticação e banco de dados)  
- Navegador web moderno (Chrome, Firefox, etc.)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Leandro-Filho/site-projeto-individual.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd site-projeto-individual
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione as configurações do Supabase e do servidor no seguinte formato:

     ```env
     DB_USER=sua_usuario_supabase
     DB_HOST=sua_url_supabase
     DB_DATABASE=nome_do_banco
     DB_PASSWORD=sua_senha
     DB_PORT=5432
     DB_SSL=true
     PORT=3000
     ```

## Uso

1. Inicie o servidor:

   ```bash
   npm start ou node server.js
   ```

2. Acesse a aplicação em:

   [http://localhost:3000](http://localhost:3000)

3. Faça login ou registre-se para começar a usar o sistema.

## Estrutura do Projeto
```bash
📁 .vscode                  # Configurações específicas do VS Code (como launch.json, settings.json)
📁 assets                  # Recursos estáticos como imagens e ícones
📁 config                  # Arquivos de configuração da aplicação (ex: conexões com o banco)
📁 controllers             # Lógica de controle entre rotas e modelos (MVC)
📁 documents               # Documentos auxiliares do projeto
📁 models                  # Modelos de dados (MVC) e definição de esquemas
📁 node_modules            # Módulos e dependências instaladas via npm
📁 routes                  # Definições das rotas da aplicação
📁 tests                   # Testes automatizados do projeto
📄 .env                    # Variáveis de ambiente (configurações sensíveis)
📄 .gitignore              # Arquivos e pastas ignorados pelo Git
📄 package-lock.json       # Registro de versões exatas das dependências instaladas
📄 package.json            # Arquivo principal de configuração do projeto Node.js
📄 readme.md               # Documentação geral do projeto
📄 server.js               # Arquivo principal do servidor backend
```
## Contribuição

1. Faça um fork do repositório.  
2. Crie uma branch para sua feature:

   ```bash
   git checkout -b minha-feature
   ```

3. Commit suas alterações:

   ```bash
   git commit -m "Adiciona minha feature"
   ```

4. Envie para o repositório remoto:

   ```bash
   git push origin minha-feature
   ```

5. Abra um Pull Request.

## links para ver passo a passo do projeto

[Clique aqui para assistir o vídeo do código do site](https://www.youtube.com/watch?v=QvTuMmveXms&t=1s)

[Clique aqui para assistir o vídeo do site em funcionamento](https://www.youtube.com/watch?v=zUuwEFimL_U&t=4s)

## Licença

Este projeto está licenciado sob a Licença MIT.

## Contato

Para dúvidas ou sugestões, entre em contato com leandro.filho@sou.inteli.edu.br.