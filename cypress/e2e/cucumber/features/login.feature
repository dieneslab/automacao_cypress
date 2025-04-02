Feature: Login no sistema

    Scenario: Usuário faz login com credenciais válidas
        Given que o usuário acessa a página de login
        When ele preenche o usuario "admins" e a senha "admin123"
        Then ele deve ver o dashboard com título "Time at Work"

    Scenario: Usuário tenta login com senha inválida
        Given que o usuário acessa a página de login
        When ele preenche o usuario "admin" e a senha "senhaErrada"
        Then ele deve ver a mensagem de erro "Invalid credentials"        