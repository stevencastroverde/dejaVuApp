function Post (title, author, body, image_url){
  this.title = title,
  this.author = author,
  this.body = body,
  this.image_url = image_url,
  this.count = 0,
  this.dateCreated = new Date();
}

function Comment (body) {
  this.body = body
  this.dateCreated = new Date();


}
