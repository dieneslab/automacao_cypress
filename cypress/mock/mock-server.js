const express = require('express')
const app = express()
const PORT = 4567

app.use(express.json())

const searches = {}

function generateId() {
  return Math.random().toString(36).substring(2, 10)
}

app.post('/crawl', (req, res) => {
  const { keyword } = req.body;
  if (!keyword || keyword.length < 4 || keyword.length > 32) {
    return res.status(400).json({ error: 'Keyword inválida' })
  }

  const id = generateId()
  searches[id] = {
    id,
    status: 'active',
    urls: [
      'http://hiring.axreng.com/index2.html',
      'http://hiring.axreng.com/htmlman1/chcon.1.html'
    ]
  };

  res.json({ id })
});

app.get('/crawl/:id', (req, res) => {
  const search = searches[req.params.id]
  if (!search) return res.status(404).json({ error: 'Busca não encontrada' })
  res.json(search)
})

app.listen(PORT, () => {
  console.log(`Mock API rodando em http://localhost:${PORT}`)
})