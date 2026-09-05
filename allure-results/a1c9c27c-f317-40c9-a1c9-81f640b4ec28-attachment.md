# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "Hovers" [level=3] [ref=e8]
      - paragraph [ref=e9]: Hover over the image for additional information
      - generic [ref=e10]:
        - img "User Avatar" [ref=e11]
        - generic [ref=e12]:
          - 'heading "name: user1" [level=5] [ref=e13]'
          - link "View profile" [ref=e14] [cursor=pointer]:
            - /url: /users/1
      - img "User Avatar" [ref=e16]
      - img "User Avatar" [ref=e18]
  - generic [ref=e20]:
    - separator [ref=e21]
    - generic [ref=e22]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e23] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```