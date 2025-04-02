Feature: Finalizar compra em um e-commerce

  Scenario: Adicionar um produto ao carrinho e concluir a compra com sucesso
    Given que o usuário acessa a página ecommerce de login
    When ele insere o usuário "standard_user" e a senha "secret_sauce"
    And clica no botão de login
    Then ele deve ser redirecionado para a página de produtos

    When ele adiciona o produto "Sauce Labs Backpack" ao carrinho
    And acessa o carrinho de compras
    Then o carrinho deve conter 1 item
    And o item deve ter o nome "Sauce Labs Backpack"
    And o preço deve ser "$29.99"

    When ele inicia o checkout
    And preenche os dados pessoais com:
      | Nome   | Sobrenome | CEP       |
      | Dienes | Stein     | 89000-000 |
    And clica no botão de continuar
    And finaliza a compra
    Then ele deve ver a mensagem de transação "Thank you for your order!"