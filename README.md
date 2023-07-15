# Meu Bilhete de Loteria

# Sobre o projeto

https://josuel-junior.github.io/meu-bilhete-react/

 
 Meu Bilhete de Loteria é uma aplicação WEB que disponibiliza os resultados dos jogos da Loteria Federal, é possível ainda conferir os resultados anteriores, inserindo o número do concurso no campo de busca.

A aplicação conta também com a possibilidade de gerar um PDF do resultado para compartilhar ou imprimir.


## Layout web
![Web ](https://github.com/Josuel-Junior/projects-images/blob/master/image%20Meu-Bilhete/Layout%20desktop.PNG?raw=true)


## Layout tablet
![Tablet ](https://github.com/Josuel-Junior/projects-images/blob/master/image%20Meu-Bilhete/Layout%20tablet.png?raw=true)


## Layout mobile

![Mobile ](https://github.com/Josuel-Junior/projects-images/blob/master/image%20Meu-Bilhete/Layout%20mobile.PNG?raw=true)

# Sobre a criação do projeto

### Axios

Para consumir a API utilizei a biblioteca AXIOS que nos permite fazer o consumo de forma simples.

### ReactRouterDom

O Roteamento das páginas foi criado com react-router-dom, que é a biblioteca padrão do react para roteamento de páginas.

### HashRouter

Para publicar com o GitHub pages utilizei o HashRouter no lugar do BrowserRouter, pois o GitHub Pages não suporta o histórico do navegador como ele faz por padrão, gerando erro ao atualizar a página,
inserindo o HashRouter o problema é resolvido porque ele usa parte do hash do URL para manter a interface do usuário sincronizada com a URL.

### Usestate e Useeffect

Foi usado o useState que permite a criação de estado no componente através de função e o useEffect para acompanhar a atualização do componente.

### ReactToPrint

Para criar o recurso de gerar PDF foi usado a biblioteca react-to-print que nos possibilita imprimir ou gerar um PDF dos componentes já estilizados.


### Toastify

A biblioteca Toastify foi usada Para personalizar as notificações.


# Tecnologias e bibliotecas utilizadas

- HTML / CSS / JS
- ReactJS
- ReactToPrint
- Axios
- Toastify


# clonar repositório
git clone https://github.com/Josuel-Junior/meu-bilhete-react/tree/master


# Autor

Josuel Junior Fonseca Carneiro
