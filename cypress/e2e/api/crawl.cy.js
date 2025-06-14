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