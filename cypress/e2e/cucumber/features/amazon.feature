# language: pt

Funcionalidade: Validação do Carrinho de Compras

Cenário: Validar a adição e atualização do produto no carrinho
  Dado que o usuário acessa o site 'https://www.amazon.com.br'
  Quando pesquisa pelo produto 'Console Xbox Series S'
  E adiciona uma unidade ao carrinho
  Então o preço no carrinho corresponde ao valor do produto
  Quando aumenta a quantidade para 2 unidades
  Então a quantidade e subtotal são atualizados corretamente