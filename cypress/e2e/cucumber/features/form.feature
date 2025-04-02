Feature: Preenchimento de formulário

    Background:
        Given que o usuário acessa a página de login
        When ele preenche o usuario "admin" e a senha "admin123"
        Then ele deve ver o dashboard com título "Time at Work"

    Scenario: Usuário acessa o menu "My Info" e atualiza alguns detalhes pessoais
        Given que o usuário acessa o menu "My Info"
        When ele atualiza o formulário com os seguintes dados:
            | Name   | MiddleName | LastName | EmployeeID | LicenseExpiryDate | Nationality | Gender |
            | Dienes | Nogueira   | Stein    | 199        | 2030-12-31        | Belarusian  | Female | 
        And clica no botão "Save"
        Then ele deve ver a mensagem "Successfully Updated"