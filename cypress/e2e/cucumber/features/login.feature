Feature: Login no sistema

    Scenario: Usuário faz login com credenciais válidas
        Given que o usuário acessa a página de login
        When ele preenche usuario e senha
        Then ele deve ver a página inicial do sistema