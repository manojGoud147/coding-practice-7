// Write your code here

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={onClickSuggestion}>
        <img src="" alt="arrow" />
      </button>
    </li>
  )
}

export default SuggestionItem
