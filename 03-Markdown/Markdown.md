Markdown is a lightweight markup language for creating formatted text using a plain-text editor. A markup language is a system for annotating a document in a way that is syntactically distinguishable from the text, meaning when the document is processed for display, the markup language is not shown, and is only used to format the text.
Markdown syntax is designed to be readable and unobtrusive, so the text in Markdown files can be read even if it isn’t rendered.

The text is stored in a file that has an .md or .markdown extension. 

Markdown applications use a Markdown processor to take the formatted text and output it to HTML format, it can be viewed directly in a web browser or combined with a style sheet.



## An unordered list and a list within a list:

<ul> 
    <li>Listed Item</li>
    <li>Listed Item</li>
    <li>Listed Item</li>
    <li>Listed Item
        <ul>
    		<li>Item in a sub list</li>
    		<li>Item in a sub list</li>
    	</ul>
    </li>
</ul>
The markdown syntax for this type of list is :

```
<ul> 
    <li>Listed Item</li>
    <li>Listed Item</li>
    <li>Listed Item</li>
    <li>Listed Item
        <ul>
    		<li>Item in a sub list</li>
    		<li>Item in a sub list</li>
    	</ul>
    </li>
</ul>
```

## An ordered list:

<ol> 
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
 </ol>
The markdown syntax for this type of list is :

```
<ol> 
    <li>Element 1</li>
    <li>Element 2</li>
    <li>Element 3</li>
 </ol>
```

## This is a markdown image.

![static image](assets/1200px-Markdown-mark.svg.png)

The markdown syntax for static images is :

```
![static image]("image url")
```

## A code Block

```html
<html>
<body>
<script type="text/javascript">
    alert("Hello Welcome Woods on our Markdown excercice !");
</script>
</body>
</html>    
```

## Different titles and subtitles

  ### Level 3 title
   #### Level 4 title
   ##### Level 5 title

 The markdown syntax for titles is : 

      ### Level 3 title
      #### Level 4 title
      ##### Level 5 title