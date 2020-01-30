This is the simple example of 'Page Object Model'
------------------------------------------------
> I will create later on a little be more complicated, but please use this one like an example which you have to adapt for your simple tests

##### So in the Repo you will find two the same tests:
- example **without** POM [here](https://github.com/Ebazhanov/page-object-model-cypress-v1/blob/52ffb8d8611d2229d746e53b8e99d86086852c47/cypress/e2e/exampleWithoutPOM.js)
- and second one **with** POM [here](https://github.com/Ebazhanov/page-object-model-cypress-v1/blob/52ffb8d8611d2229d746e53b8e99d86086852c47/cypress/e2e/exampleWithPOM.js)

##### The diagram shows us:
- dependencies where we are keeping our locators/selectors
<img src="https://monosnap.com/image/nw7GXXmrnoTxFqLOVrn6VKMuzMjUcC"/>



##### Benefit from this structure are: 
- Reusability of the same selectors/locator in different classes/tests
- Clear and more readable architecture
- Easy to fix failed **tests** by fixing locator/selector in one place
- and etc... 

## Usage: 
- `npx cypress open`

