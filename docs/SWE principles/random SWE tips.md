# Random SWE Tips

- Focus on writing scripts to solve problems, not just for the sake of implementing stuff.
    - your priority should ultimately be the business use case you're meant to address.
- Think in terms of the whole system that you're dealing with, not just the individual features that you're implementing.
- more than just dealing with how some component works, you should also consider how it interacts with everything else.
    - thats why User Acceptance Testing (UAT) or literal tests are important.
    - concerned with:
        - what API it calls
        - what other parts of the app are listening for this click
        - how do i handle it if script for it fails
    - Ultimately care about:
        - How data flows in your app (pipelining)
        - How components depend on each other (dependencies)
        - How small changes might break other parts (breaking changes)
        - How bugs can emerge via code smell
- Do not repeat shit. Automate as much as reasonably possible, and plan to eliminate human error where possible.
    - turn your tests into a script that github actions can handle whenever you push code.
    - don't manually debug, have your script produce structured logging to trace the error.
        - ie error returns input type and value
    - if you need to do it more than once, you need to automate it.

- Communicate clearly, and be responsible.
    - if stuff breaks, be clear and specific about how it broke, and help with fixing it.
- if you screwed up, learn why and improve.

---

