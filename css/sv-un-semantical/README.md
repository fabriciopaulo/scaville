# UNIVERSE SEMANTICAL CSS

## Visão Geral / Overview
O que é Universe Semantical Css?<br/>
*What is Universe Semantical CSS?*<br/>

Um pássaro? Um avião? Um novo Framework legal que está na moda?<br/>
*A bird? An airplane? A new nice Framework that is fashionable?*<br/>

Não, a Universe Semantical CSS é uma pequena folha de estilos que facilita sua vida na estilização de páginas web, pensada para ser intuitiva, prática e dinâmica.<br/>
Ela pretende mudar a forma como você atualmente desenvolve estilos simples, pode ser utilizada como uma ferramenta de apoio ao desenvolvimento
de layouts, sites e web-apps.<br/>
Não temos a pretensão de substituir frameworks como Bootstrap, Semantic-UI, jQuery-UI, portanto, nosso objetivo não é montar objetos prontos, sistemas de grids, componentes, nav's etc...<br/>

*Not, the Universe Semantical CSS is a small stylesheet that makes your life easier in the styling of web pages, designed to be intuitive, practical and dynamic.*<br/>
*She intends to change the way you currently develops simple styles can be used as a tool to support the development
layouts, websites and web-apps.*<br/>
*We do not pretend to replace frameworks like Bootstrap, Semantic-UI, jQuery-UI, so our goal is not to assemble ready objects, systems of grids, components, navs and etc ...*<br/>

Entretanto, algumas coisas podem se tornar mais simples, por exemplo, é mais prático, limpo e flexível usar:<br/>
*However, some things can become simpler, for example, is more practical, clean and flexible to use:*<br/>

```html
<div class="un-float-left un-margin-top-5 un-color-gray">
</div>
```
ao invés de:<br/>
*instead of*<br/>

```CSS3
.one-class{
  float: left;
  margin: 5%;
  background-color: #333333;
}
```
```html
<div class="one-class">
</div>
```

E qual a vantagem disso?<br/>
Simples, não é necessária a criação de classes específicas para preencher atributos simples (como definir um alinhamento, float, border, margin, shadow etc...), isso gera menos código e torna sua manutenção mais fácil.<br/><br/>
*And what is the advantage of that?*<br/>
*Simple, not is need creating specific classes to fill simple attributes (as set alignment, float, border, margin, shadow etc ...), this generates less code and makes its easier maintenance.*<br/>

Mas sou das antigas e gosto de escrever!<br/>
Ok, sem problemas, a Universe Semantical CSS não te impede de criar classes ou sobreescrever propriedades (lembra do ***`!important`***?)<br/><br/>
*But I am old and liking to write!*<br/>
*Ok, no problem, the Universe Semantic CSS does not prevent you of create classes or override properties (remember of the* ***`!important`*** *?)*<br/>

## Implementação / Implementation
A folha de estilos utiliza recursos de CSS3.<br/>
Em sua página (index.html ou qualquer outra) você deve inserir o arquivo `un-semantical.css` entre as tags `<head></head>`:<br/><br/>
*The style sheet uses CSS 3 features.*<br/>
*On your page (index.html or any other) you must insert the* *`un-semantical.css`* *file between the tag* *`<head> </ head>`* *:*<br/>
```html
<link rel="stylesheet" href="un-semantical.css">
```
## Uso / Usage
Após a implementação da folha de estilos na página html, o uso será bastante simples e intuitivo, como se observa:<br/>
*After the implementation of the style sheet in the HTML page, the use is quite simple and intuitive, as shown:*<br/>
```html
<div class="un-float-right un-background-alice-blue un-color-black">
</div>
```
É possível observar então que, as propriedades e valores css, são utilizadas como classes, antecedidas de "un-", sendo aninhadas no atributo class do elemento a ser modificado.<br/>
As configurações desejadas serão utilizadas com base em combinação, ex:<br/><br/>
*Is can see then that the properties and CSS values are used as classes, preceded by "un-", being nested in the class attribute of the element to be modified.*<br/>
*The desired settings are used based on the combination, eg:*<br/>
```html
<div class="un-float-right un-background-color-alice-blue un-color-black un-position-relative">
</div>
```
Será o mesmo que:<br/>
*It will be the same as:*
```css
.one-class{
  float:right;
  background-color: AliceBlue;
  color:  #000000;
  position: relative;
}
```
```html
<div class="one-class">
</div>
```
Uso Bootstrap, Semantic-UI, jQuery UI e agora?<br/>
Todos as classes do pacote UNIVERSE SEMANTICAL são precedidos de "un-", padrão que impede conflito entre classes dos referidos pacotes!<br/>
Se ainda assim houver conflito, você pode utilizar o ***`!important`***.<br/>

*I use Bootstrap, Semantic-UI, jQuery UI and now?* <br/>
*All classes UNIVERSE semantical package are preceded by "un-" standard that prevents conflict between classes of these packages!* <br/>
*If there is still conflict, you can use the* ***`! Important`***.<br/><br/>

# Referência de API / API Reference
O projeto acaba de sair do forno então, aguarde esfriar um pouco, já estamos trabalhando nisso...<br/>
*The project has just come out of the oven, so wait cool slightly, we are already working on it ...*<br/>

[...]
## Regras gerais / Default roles
* Em regra, os números usados nas classes representam porcentagens, ex: **`.margin-2 `** representa **`margin: 2%;`**
* *In general, the numbers used in the classes represent percentages, eg* **`.margin-2`** *is* **`margin: 2%;`**<br/>

## POSICIONAMENTO / POSITIONING
Classes disponíveis para posicionamento:<br/>
*Classes available for positioning:*<br/>

#### Position
  `.un-position-[relative, absolute, static, fixed]`

```html
Ex:
<div class="un-position-relative">
  <div class="un-position-absolute">
  </div>
  <div class="un-position-static">
  </div>
  <div class="un-position-fixed">
  </div>
</div>
```

#### Floats
  - `.un-float-[left, right]`
  - `.un-clear-both`

```html
Ex:
<div class="un-float-left">
  <div class="un-float-left">
  </div>
  <div class="un-float-right">
  </div>
  <div class="un-clear-both">
  </div>
</div>
```

#### Margins
  - `.un-margin-none`
  - `.un-margin-auto`.
  - `.un-margin-[1..100]` > All
  - `.un-margin-left-[1..100]` > Left
  - `.un-margin-top-[1..100]` > Top
  - `.un-margin-right-[1..100]` > Right
  - `.un-margin-bottom-[1..100]` > Bottom

```html
Ex:
<div class="un-margin-5">
  <div class="un-margin-3 un-margin-left-9">
    <div class="un-margin-39 un-margin-top-7 un-margin-bottom-12">
    </div>
  </div>
</div>
```

#### Padding
  - `.un-padding-none`
  - `.un-padding-[1..100]` > All
  - `.un-padding-left-[1..100]` > Left
  - `.un-padding-top-[1..100]` > Top
  - `.un-padding-right-[1..100]` > Right
  - `.un-padding-bottom-[1..100]` > Bottom

```html
Ex:
<div class="un-padding-5">
  <div class="un-padding-3 un-padding-left-9">
    <div class="un-padding-39 un-padding-top-7 un-padding-bottom-12">
    </div>
  </div>
</div>
```


## SOMBRAS / SHADOWS
Classes disponíveis para efeitos de sombra<br/>
*Classes available for shadow effects*<br/>

### Box Shadow

  - `un-box-shadow-[left, top, right, bottom, top-left, top-right, bottom-left, bottom-right]`
  - `un-box-shadow-[left, top, right, bottom, top-left, top-right, bottom-left, bottom-right]-[short, medium, large, extra]`
  - `un-box-shadow-[left, top, right, bottom, top-left, top-right, bottom-left, bottom-right]-[short, medium, large, extra]-[expanded, many-expanded]`

```html
Ex:
<div class="un-box-shadow-top">
  <div class="un-box-shadow-top-left">
    <div class="un-box-shadow-bottom-right">
    </div>
  </div>
  <div class="un-box-shadow-top-short">
    <div class="un-box-shadow-top-short-expanded">
    </div>
    <div class="un-box-shadow-left-large-many-expanded">
    </div>
  </div>
</div>
```
A cor da sombra é definida pela propriedade color (se aplicada em uma div)<br/>
*The shadow color is defined by the color property (if applied in a div)*<br/>
```html
Ex:
<div class="un-box-shadow-top un-color-brown">
</div>
Produzirá uma div com sombra no topo na cor marrom

Will produce a div with shadow on top in brown
```

A classe **`un-color-[...]`** irá alterar a cor da sombra e do texto interno da div,
caso isso não seja o ideal, você poderá usar as tags `<span></span>` ou `<div></div>` com a classe
**`un-color-[...]`**.<br/>

*The class* **`un-color-[...]`** *will change the color of the shadow and the inside text of the div,*
*if this is not ideal, you can use the tags* `<span></span>` *or*  `<div></div>` *with the class* **`un-color-[...]`**.<br/>


```html
<div class="un-box-shadow-top un-color-brown">
  div com sombra na cor marrom
  div shaded in brown
  <span class="un-color-violet">
    texto na cor violeta
    text in purple
  </span>
  <div class="un-color-violet">
    texto na cor violeta
    text in purple
  </div>
</div>
```

## CORES DE PLANO DE FUNDO / BACKGROUND COLORS

  `un-background-color-[...]`

```html
<div class="un-background-color-alice-blue">
  <div class="un-background-color-chocolate">
  </div>
</div>
```
  Cores Disponíveis:<br/>
  As 505 cores disponíveis podem ser consultadas em:
  [Hex Color Names](http://www.color-hex.com/color-names.html)<br/>

  *Available colors:*<br/>
  *The 505 colors available can be found at:*
  [Hex Color Names](http://www.color-hex.com/color-names.html)<br/>
 ```
 - As cores disponíveis são reconhecidas por padrão pelos browsers
 - Os nomes devem ser inseridos em lowercase separados por `-` ex: `AliceBlue` > `background-color-alice-blue`

 - Available colors are recognized by default by browsers
 - The names must be entered in lowercase separated by `-` eg` AliceBlue`> `background-color-alice-blue`
 ```

## CORES / COLORS

`un-color-[...]`

```html
<div class="un-color-alice-blue">
  <div class="un-color-chocolate">
  </div>
</div>
```
Cores Disponíveis:  
As 505 cores disponíveis podem ser consultadas em:
[Hex Color Names](http://www.color-hex.com/color-names.html)<br/>

*Available colors:*<br/>
*The 505 colors available can be found at:*
[Hex Color Names](http://www.color-hex.com/color-names.html)<br/>

```
- As cores disponíveis são reconhecidas por padrão pelos browsers
- Os nomes devem ser inseridos em lowercase separados por `-` ex: `AliceBlue` > `color-alice-blue`

- Available colors are recognized by default by browsers
- The names must be entered in lowercase separated by `-` eg` AliceBlue`> `color-alice-blue`
```

## TEXT & FONTS

### Text Align
`.un-text-align-[left, right, center, justify]`

```html
Ex:
<div class="un-text-align-justify">
  <div class="un-text-align-left">
  </div>
</div>
```

### Text Decoration
`.un-text-decoration-[line-through, none, overline, underline, inherit]`

```html
Ex:
<div class="un-text-decoration-none">
  <div class="un-text-decoration-underline">
  </div>
</div>
```

### Text Transform
`.un-text-transform-[capitalize, full-width, lowercase, none, uppercase, inherit]`

```html
Ex:
<div class="un-text-transform-capitalize">
  <div class="un-text-transform-lowercase">
  </div>
</div>
```

### Font Style
`.un-font-style-[italic, normal, oblique]`

```html
Ex:
<div class="un-font-style-italic">
  <div class="un-font-style-oblique">
  </div>
</div>
```

### Letter Spacing
`.un-letter-spacing-[1..100]`

```html
Ex:
<div class="un-letter-spacing-5">
</div>
```

### Line Height
- `.un-line-height-[1..100]`
- `.un-line-height-[1..100]-px`

```html
Ex:
<div class="un-line-height-5">
  <div class="un-line-height-25-px">
  </div>
</div>
```

### Word Spacing
- `.un-word-spacing-[1..100]`
- `.un-word-spacing-[1..100]-px`

```html
Ex:
<div class="un-word-spacing-5">
  <div class="un-word-spacing-25-px">
  </div>
</div>
```

### Text Indent
- `un-text-indent-[1..100]`
- `un-text-indent-[1..100]-px`

```html
Ex:
<div class="un-text-indent-5">
  <div class="un-text-indent-25-px">
  </div>
</div>
```

### Font Size
- `un-font-size-[1..100]-em`
- `un-font-size-[1..100]-px`
- `un-font-size-[1..100]-pt`

```html
Ex:
<span class="un-font-size-5-em"></span>
<span class="un-font-size-12-pt"></span>
<span class="un-font-size-32-px"></span>
```

### Font Weight
- `un-font-weight-[]`
- `un-font-size-[1..100]-px`
- `un-font-size-[1..100]-pt`

```html
Ex:
<span class="un-font-size-5-em"></span>
<span class="un-font-size-12-pt"></span>
<span class="un-font-size-32-px"></span>
```

## FILTROS / FILTERS

### Opacity
  - `un-opacity-transparent`
  - `un-opacity-[1..100]`

  ```html
  Ex:
  <div class="un-opacity-5">
  </div>
  ```

### Blur
  `un-blur-[1..100]`<br/>
  Aqui o algarismo representa pixels `px`<br/>
  *Here the figure is in* `pixels px`<br/>

  ```html
  Ex:
  <div class="un-blur-5">
  </div>
  ```

# LICENÇA / LICENCE
#### Free OpenSource BSD Licence
Copyright (c) 2015, fabriciopaulo
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.
