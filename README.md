# Crossover Test - Video Player

## Begin

Antes de tudo vocês precisam instalar o [Node JS](https://nodejs.org/en/). O primeiro [vocês precisam entrar no site](https://nodejs.org/en/) e baixar a última versão e instalar. Para usuários Linux e Mac o procedimento é mais fácil usando apt-get ou Brew.

Depois que o Node JS estiver instalado, rode o comando abaixo:

```
npm install -g bower && npm install -g gulp-cli
```

Feito isso o NPM e o Bower estarão prontos para uso.

### Startando o projeto

Rode o comando abaixo:

```
gulp
```

### Build do projeto

Depois que o projeto estiver pronto para subir para homologação, rode o build do projeto, que fará com que os arquivos CSS's e JS's fiquem todos concatenados e minificados. O comando é o abaixo:

```
gulp build
```

Ele vai gerar uma pasta chamada **dist/** que deve ser zipada e enviada para o responsável fazer o deploy.