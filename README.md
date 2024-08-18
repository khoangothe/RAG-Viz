# To do

Create an interface to visualize the steps of RAG in realtime 

1. Chat application:
- [x] Top down UI Layout 
- [X] Enter to submit form
2. RAG UI visualization:
- [ ] Add Chunking Options and Create Index options
- [x] Split sections for the visualization panel in RAG
- [ ] Get the ability to upload file, maybe through s3 and then process through a Lambda function or on uploaded? 
  - [ ] Using UploadThing 
    - [x] Integrate UploadThing
    - [x] Style uploadThing button
    - [ ] How did they get the progress bar done? Create customized progress bar
    - [ ] Wipe out UploadThing everyhour
    - [x] Hook to Pinecone in onComplete
    - [ ] Wipe out Pinecone every hour using a cron job
- [ ] Learn how to draw trees on website?
- [ ] Learn how to track langchain step in realtime
- [ ] Add Langchain functionality
  - [ ] Chain of Thoughts implementation
- [ ] Learn to embed the chatbot to a new page.
