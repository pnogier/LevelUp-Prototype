import { TAnswer } from 'types'


export default function checkAnswer(proposal: TAnswer, goodAnswer: TAnswer) {
  const result = proposal === goodAnswer
  console.log(result)
  return result
}