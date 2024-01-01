# Nome do Seu Jogo

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção da interface do usuário.
- **Electron:** Framework para criar aplicativos multiplataforma com tecnologias web.
- **Babylon.js:** Motor gráfico 3D para criar experiências visuais interativas.
- **TypeScript:** Superset tipado de JavaScript para um desenvolvimento mais seguro.
- **Outras Tecnologias...** (Adicione outras tecnologias conforme necessário)

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada para facilitar a manutenção e escalabilidade do código. Abaixo está uma descrição breve de cada diretório:

- **`src/components/`**: Contém componentes reutilizáveis relacionados à renderização, como elementos da cena do jogo, HUD, etc.

  - **`Game/`**: Subdiretório com componentes específicos para a cena do jogo.
    - `Scene.tsx`: Componente responsável por renderizar a cena principal do jogo.
    - `HUD.tsx`: Componente para o Heads-Up Display.
    - Outros componentes relacionados à renderização.

  - **`MainMenu/`**: Subdiretório para componentes relacionados ao menu principal do jogo.

- **`src/views/`**: Contém componentes de nível superior que servem como "páginas" ou "telas" da aplicação.

  - `App.tsx`: Componente principal que renderiza diferentes partes do jogo com base no estado ou navegação.
  - Outros componentes de visualização.

- **`public/`**: Diretório para arquivos estáticos, como o HTML principal, que são servidos publicamente.

- **`electron-main/`**: Contém arquivos relacionados à inicialização do processo principal do Electron.

- **`assets/`**: Diretório para armazenar ativos do jogo, como modelos 3D, texturas e outros recursos gráficos.

## Como Iniciar o Projeto

### Install

```bash
$ yarn install
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```
