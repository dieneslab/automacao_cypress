/*
Funcionalidade: Busca de termos no website

  Cenário: Validar que um termo correto retorna um ID alfanumérico
    Dado que o usuário envia uma requisição POST com um termo válido
    Quando a API processa a requisição
    Então o sistema deve retornar um ID contendo 8 caracteres alfanuméricos

  Cenário: Testar termos inválidos
    Dado que o usuário envia um termo com menos de 4 caracteres
    Quando a API valida a entrada
    Então o sistema deve retornar um erro informando a restrição

  Cenário: Consultar resultados de busca ativos
    Dado que o usuário envia uma requisição GET com um ID existente
    Quando a API processa a consulta
    Então o sistema deve retornar o status e as URLs encontradas

  Cenário: Consultar ID inexistente
    Dado que o usuário consulta um ID inválido
    Quando a API tenta recuperar os dados
    Então o sistema deve retornar uma mensagem de erro

  Cenário: Verificar resultados parciais durante a busca
    Dado que a busca está em andamento
    Quando o usuário consulta os resultados
    Então o sistema deve retornar as URLs já encontradas
*/

describe('Testes com API mockada', () => {
    it('Cria uma nova busca', () => {
      const keyword = 'security'
  
      cy.request('POST', 'http://localhost:4567/crawl', { keyword }).then((res) => {
        expect(res.status).to.eq(200)
        const id = res.body.id
        Cypress.env('searchId', id)
      })
    })
  
    it('Consulta resultados da busca', () => {
      
      const expectedUrls = [
        'http://hiring.axreng.com/index2.html',
        'http://hiring.axreng.com/htmlman1/chcon.1.html'
      ]
      
      const id = Cypress.env('searchId')
      expect(id, 'ID da busca deve estar definido').to.exist
    
      cy.request('GET', `http://localhost:4567/crawl/${id}`).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.id).to.eq(id)
        expect(res.body.urls).to.deep.equal(expectedUrls)
      })
    })
  })