# To do

Create an interface to visualize the steps of RAG in realtime 

1. Chat application:
- [x] Top down UI Layout 

- [x] Chat component showing chat history based on input

- [x] Input component adding new input to chat history

- [x] Calling OpenAi Capabilities
- [x] Redrawn Nav bar
2. RAG UI visualization:

- [x] Split sections for the visualization panel in RAG
- [ ] Get the ability to upload file, maybe through s3 and then process through a Lambda function or on uploaded? 
  - [ ] Using UploadThing 
    - [x] Integrate UploadThing
    - [ ] Style uploadThing button
    - [ ] How did they get the progress bar done? Create customized progress bar
    - [ ] Wipe out UploadThing everyhour
    - [ ] Hook to Pinecone in onComplete
    - [ ] Wipe out Pinecone every hour using a cron job
  - [ ] Using customized S3? Hook to Pinecone through a Lambda function? 
- [ ] Learn how to draw trees on website?
- [ ] Learn how to track langchain step in realtime
- [ ] Add Langchain functionality
  - [ ] Chain of Thoughts implementation
- [ ] Learn to embed the chatbot to a new page.
