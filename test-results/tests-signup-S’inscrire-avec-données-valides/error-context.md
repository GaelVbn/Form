# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - heading "Sign Up" [level=1] [ref=e4]
    - paragraph [ref=e5]: Please fill in this form to create an account.
    - separator [ref=e6]
    - generic [ref=e8]: Email
    - textbox "Email" [active] [ref=e9]: aliceexample.com
    - generic [ref=e11]: Password
    - textbox "Password" [ref=e12]: Password123
    - generic [ref=e14]: Repeat Password
    - textbox "Repeat Password" [ref=e15]: Password123
    - generic [ref=e16]:
      - checkbox "Remember me" [checked] [ref=e17]
      - text: Remember me
    - paragraph [ref=e18]:
      - text: By creating an account you agree to our
      - link "Terms & Privacy" [ref=e19] [cursor=pointer]:
        - /url: "#"
      - text: .
    - generic:
      - button "Cancel" [ref=e20]
      - button "Sign Up" [ref=e21]
  - button "Open Next.js Dev Tools" [ref=e27] [cursor=pointer]:
    - img [ref=e28] [cursor=pointer]
  - alert [ref=e31]
```