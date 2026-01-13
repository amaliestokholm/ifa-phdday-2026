<!-- .slide: data-auto-animate -->

```r [1,3]
# Fill in the spot we created for a plot
output$phonePlot <- renderPlot({
  # Render a barplot
  barplot(WorldPhones[,input$region]*1000, 
          main=input$region,
          ylab="Number of Telephones",
          xlab="Year")
})
```
<!-- .element: data-id="not-hello" -->

---

<!-- .slide: data-auto-animate data-auto-animate-duration="1.0"-->

```r [2,5-6]
# Fill in the spot we created for a plot
output$phonePlot <- renderPlot({
  barplot(WorldPhones[,input$region]*1000, 
          main=input$region,
          ylab="Number of Telephones",
          xlab="Year")
})
```
<!-- .element: data-id="not-hello" -->

---

<!-- .slide: data-auto-animate-restart -->


