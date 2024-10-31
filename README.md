# FilmesFlix 🎬

FilmesFlix é uma aplicação web desenvolvida com React que permite buscar, visualizar detalhes e explorar os melhores filmes. A aplicação consome dados de uma API de filmes e exibe informações como receita, orçamento, descrição e duração dos filmes.

## 🔧 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **React Router**: Para navegação entre páginas.
- **React Icons**: Conjunto de ícones para representar categorias e ações.
- **CSS**: Estilização customizada das páginas.
- **API Externa**: Os dados dos filmes são obtidos de uma API externa configurada com variáveis de ambiente.

## ⚙️ Configuração do Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seuusuario/filmesflix.git
2. **Instale as dependências**:
  ```bash
   npm install
  ```
3.**Configuração da API: Crie um arquivo .env na raiz do projeto e adicione suas chaves de API:**
  ```bash
  VITE_API=https://api.exemplo.com/filmes/
  VITE_API_KEY=sua_chave_aqui
  VITE_IMG=https://image.tmdb.org/t/p/w500/
  ```
4.**Executar o projeto:**
  ```bash
    npm run dev
  ```
##📝 Estrutura do Projeto

-src/components: Contém os componentes reutilizáveis, como MovieCard.
-src/pages: Inclui as páginas principais, como Home, Search e Movie.
-src/styles: Estilos personalizados para componentes e páginas.

##🔍 Funcionalidades
-Busca de Filmes: Utilize a barra de busca para encontrar filmes específicos.
-Visualização dos Detalhes: Acesse informações detalhadas sobre cada filme, incluindo receita, orçamento, descrição e duração.
-Melhores Filmes: Explore uma lista dos filmes mais bem avaliados.




