# Character Limit Warning Feature Implementation

## Tasks
- [x] Add UI elements in popup.html for limit warnings and trim notices
- [x] Add CSS styling for warning and notice elements in popup.css
- [x] Implement limit checking and trimming logic in popup.js
  - [x] Add TOKEN_LIMITS constant for each provider
  - [x] Add estimateTokens() function
  - [x] Add checkContentLimit() function
  - [x] Add trimContent() function for intelligent trimming
  - [x] Add showLimitWarning() and showTrimNotice() functions
  - [x] Modify summarizePage() to check limits before API call
  - [x] Update extractPageContent() to return full content for client-side trimming

## Summary of Changes

### popup.html
- Added `<div id="limit-warning">` element for displaying token limit warnings
- Added `<div id="trim-notice">` element for displaying trim notifications

### popup.css
- Added `.limit-warning` class with amber/yellow styling and warning icon
- Added `.trim-notice` class with blue styling and scissors icon
- Added light theme variants for both warning and notice elements

### popup.js
- Added `TOKEN_LIMITS` constant with safe limits for OpenAI (100K), Gemini (800K), and Claude (150K) providers
- Added `MAX_CONTENT_LENGTH` constant (50,000 chars) - increased from 12,000
- Added `estimateTokens()` function to estimate token count from characters
- Added `checkContentLimit()` function to check if content exceeds safe limits
- Added `trimContent()` function for intelligent content trimming at sentence/word boundaries
- Added `showLimitWarning()` function to display warnings in the UI
- Added `showTrimNotice()` function to inform users when trimming occurs
- Added `hideLimitWarnings()` function to clear warnings
- Modified `summarizePage()` to check limits and trim content before API call
- Updated `extractPageContent()` to use `MAX_CONTENT_LENGTH` instead of hardcoded 12000
- Updated `clearSummary()` to also hide limit warnings

## Features
1. **Warning Display**: Shows warning when content exceeds safe token limits for the selected provider
2. **Automatic Trimming**: Intelligently trims content to fit within safe limits (tries to preserve complete sentences)
3. **User Notification**: Informs users when trimming occurs with details on how much was kept
4. **Provider-Specific Limits**: Different safe limits for each AI provider based on their context windows
