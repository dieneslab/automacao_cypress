# language: pt

Funcionalidade: Finalizar compra em um e-commerce

  Cenário: Adicionar um produto ao carrinho e concluir a compra com sucesso
    Dado que o usuário acessa a página ecommerce de login
    Quando ele insere o usuário "standard_user" e a senha "secret_sauce"
    E clica no botão de login
    Então ele deve ser redirecionado para a página de produtos

    Quando ele adiciona o produto "Sauce Labs Backpack" ao carrinho
    E acessa o carrinho de compras
    Então o carrinho deve conter 1 item
    E o item deve ter o nome "Sauce Labs Backpack"
    E o preço deve ser "$29.99"

    Quando ele inicia o checkout
    E preenche os dados pessoais com:
      | Nome   | Sobrenome | CEP       |
      | Dienes | Stein     | 89000-000 |
    E clica no botão de continuar
    E finalizo a compra
    Então devo ver a mensagem de transação "Thank you for your order!"

  Cenário: Adicionar um produto ao carrinho e concluir a compra com sucesso (Melhorado)
    Dado que realizo login com o usuário "standard_user" e senha "secret_sauce"
    Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
    E acessa o carrinho de compras
    Então o carrinho deve conter 1 item chamado "Sauce Labs Backpack" com o preço "$29.99"
    
    Quando inicio o checkout
    E preencho os dados pessoais:
      | Nome   | Sobrenome | CEP       |
      | Dienes | Stein     | 89000-000 |
    E finalizo a compra
    Então devo ver a mensagem de transação "Thank you for your order!" 