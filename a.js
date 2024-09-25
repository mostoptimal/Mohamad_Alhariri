import { HfInference } from '@huggingface/inference'

const hf = new HfInference('your access token')

const response = await hf.textGeneration({
  model: 'text-davinci-003',
  inputs: 'Once upon a time, in a land far, far away,',
  parameters: {
    max_tokens: 50,
    temperature: 0.7,
  },
})

console.log(response.generated_text)