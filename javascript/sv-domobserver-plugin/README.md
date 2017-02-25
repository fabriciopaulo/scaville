**DOM Observer Plugin**
===================


[EN] - This is a simply plugin to extend the jquery change function to include DOM Sub Three changes on object change listener.

[PT-BR] - Este é um simples plugin que estende a função change do jQuery para acrescentar as mudanças do *DOMSubThree* ao *listener* de um objeto.

----------

Usage - Uso
-------------
[EN] Their usage is very simply like on this example (On this way, any change in the object triggers an event):

[PT-BR] Seu uso é bastante simples como no exemplo (dessa forma qualquer alteração no objeto dispara um evento):

```
$('#someObject').anyChange(function(){
    alert('This has changed!');
});
```

[EN] This way only as DOM changes executed:

[PT-BR] Dessa forma apenas as alterações do DOM serão escutadas:

```
$('#someObject').domChange(function(){
    alert('This has changed!');
});
```

----------
Credits - Créditos
-----------
(C) 2017 - Fabrício Paulo