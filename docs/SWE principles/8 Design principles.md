# 8 Design principles

## Design Principles Cheat Sheet

### 1. Cohesion & SRP (Single Responsibility Principle)

#### One class, one job

- Each class should have only one reason to change
- High cohesion = related functionality grouped together
    - related code is in the same func
    - related modules are in the same folder
    - related classes are in the same file
- Example: Separate UserRepository, EmailService, Validator classes

**Ask yourself:** "Can I describe this class's purpose in one sentence without using 'and'?"

> [!tip]
>
> - **Principle:** Every class or function should have only one reason to change, meaning each piece of code has one single job.
>
> - **High Cohesion** means related items are grouped together e.g., related classes in the same file.
> - **Example:** A "bad" `UserManager` class is shown to be a "mega function" that handles validation, database lookups, email sending, and logging—all tasks that are tightly coupled. The "good" example separates these into individual, single-responsibility classes like `EmailValidator`, `UserRepository`, `EmailService`, and `UserActivityLogger`. This allows for easy testing, swapping services, and reusing components.
>
-

---

### 2. Encapsulation & Abstraction

#### Hide the details, show the interface

- Keep internal state private
- Expose behavior, not data
- Use properties/getters for controlled access
- Abstract away complexity

**Ask yourself:** "If I change this internal implementation, will client code break?"

> [!tip]
>
> - **Principle:** Hide implementation details from other users (programmers) and present only a useful interface.
>
> - **Practice:** Keep internal state private (using a leading underscore `_` in Python), expose behavior instead of data, and use methods like getters for controlled access.
> - **Example:** A "bad" `BankAccount` class allows a user to corrupt the internal state [e.g., setting a negative balance or changing the transaction list to a non-list type]. The "good" example uses private attributes and public methods (`deposit`, `withdraw`) that contain validation and track transactions internally, thus protecting the class's state.

---

### 3. Loose Coupling & Modularity

#### Depend on abstractions, not concrete implementations

- Use interfaces/abstract base classes
- Inject dependencies (don't instantiate internally)
- Components should be swappable
- Minimize inter-module dependencies

**Ask yourself:** "Can I test this component without instantiating half my system?"

> [!tip]
>
> - **Principle:** Components should not rely on specific implementations (like a single class or environment variable), making them as flexible as possible. Components should be swappable.
>
> - **Practice:** Use **interfaces** or **abstract classes** (like Python's Abstract Base Class) to define a required set of methods [an interface].
> - **Example:** A "bad" `OrderProcessor` directly initializes and relies on a specific `EmailSender` class, making them tightly coupled. The "good" approach uses an abstract `Notifier` class with a `send` method. The `OrderProcessor` then accepts *any* concrete implementation of `Notifier` (e.g., `EmailNotifier` or `SMSNotifier`), making the processor loosely coupled and the notifiers interchangeable.

---

### 4. Reusability & Extensibility

#### Open for extension, closed for modification

- Use composition over inheritance
- Strategy pattern for variation
- Plugin architectures
- Don't hardcode behavior

**Ask yourself:** "Can I add new functionality without editing existing code?"

> [!tip]
>
> - **Principle:** Functionality should be added without editing existing code.
>
> - **Example:** A "bad" `ReportGenerator` uses a large, monolithic function with nested `if/elif` statements to handle different output formats [text, CSV, HTML]. Adding a new format requires modifying this single function. The "good" example defines an abstract base class `ReportFormatter`. New formats (like `JsonFormatter` or `MarkdownFormatter`) are added by simply creating a new class that inherits from the abstract base, and the core `ReportGenerator` remains unchanged and fully extensible.

---

### 5. Portability

#### Write once, run anywhere

- Use cross-platform libraries (pathlib, not os.path)
- Environment variables for configuration
- Avoid platform-specific assumptions
- Abstract environment dependencies

**Ask yourself:** "Will this work on Linux, Windows, and Mac?"

>[!tip]
>
> - **Principle:** Code should work reliably in different environments [operating systems, configurations, or software versions].
>
> - **Example:** A "bad" `DataProcessor` **hardcodes** Windows-style file paths and a database connection string. The "good" example relies on **environment variables** for dynamic values and uses `pathlib` for cross-platform file paths, ensuring the code is not tied to a single machine or OS.

---

### 6. Defensibility

#### Fail fast, fail safe, fail loud

**Fail-fast**: Validate input immediately

```python
if amount <= 0:
    raise ValueError("Amount must be positive")
```

**Least privilege**: Store/log only what's necessary

```python
# Store: "****-****-****-1234" 
# NOT: Full credit card number
```

**Safe defaults**: Conservative, secure defaults

```python
debug_mode=False  # Not True!
timeout=30  # Not None!
```

**Ask yourself:** "What's the worst that could happen with bad input?"

> [!tip]
>
> - **Principle:** Write code to defend against bad input, assuming it will be used incorrectly, and ensure it fails gracefully.
>
> - **Practice:** Validate all input and use safe default values.
> - **Example:** A "bad" `PaymentProcessor` uses unsafe default values like `debug_mode = True` and a huge `maximum_retries` count, and it does not validate or type-hint its input [amount, account number, CVV]. The "good" example implements a `PaymentValidator` to check the amount and account number. It also sets safe default values, avoids logging sensitive data, and throws clear, relevant error messages when a payment fails.

---

### 7. Maintainability & Testability

#### Future you will thank present you

- Write clear, self-documenting code
- Pure functions when possible
- Separate business logic from I/O
- Write tests!

**Pure function example:**

```python
def add(a, b):  # Pure: same input = same output
    return a + b

def add_and_log(a, b):  # Impure: side effects
    result = a + b
    print(f"Result: {result}")  # Side effect!
    return result
```

**Ask yourself:** "Can I write a unit test for this without mocking 5 things?"

> [!tip]
>
> - **Principle:** The most expensive part of software is maintaining it, so code must be easy to change, fix, and especially, test. Testable code is generally more maintainable.
>
> - **Example:** A "bad" `Calculator` has a single, complex `calculate` method with side effects (like writing to a file), making it difficult to understand and test due to numerous possible edge cases. The "good" approach separates responsibilities into smaller, easier-to-test components, such as an `OperationParser`, individual functions for `add`, `subtract`, etc., and a simpler `Calculator` class that delegates the work.

---

### 8. Simplicity (KISS, DRY, YAGNI)

#### KISS - Keep It Simple, Stupid

- Prefer simple solutions over clever ones
- Avoid unnecessary abstractions
- If it's hard to explain, it's too complex

**DRY - Don't Repeat Yourself**

- Extract common logic into functions
- Single source of truth
- Repetition = maintenance burden

**YAGNI - You Aren't Gonna Need It**

- Don't build for hypothetical future needs
- Add features when actually needed
- Resist over-engineering

**Ask yourself:**

- "Am I making this more complex than it needs to be?"
- "Have I written this exact logic elsewhere?"
- "Will I really need this feature?"

- **Principle:** Simplify everything you do as much as possible so that others (and your future self) can easily modify the code.

> [!tip]
>
> - This principle includes three sub-patterns:
>     - **Keep It Simple, Stupid (KISS):** Simple code is often the hardest to write, but it's the easiest to understand and maintain.
>     - **Don't Repeat Yourself (DRY):** Avoid redefining the same variables or functions in slightly different ways across the code base; instead, wrap repeated logic into a reusable component.
>     - **You Aren't Going to Need It (YAGNI):** Don't over-engineer solutions or add features you don't actually need. The speaker advises prioritizing the **business need** before adding complexity, even when it comes to the other design patterns.
>
---

## Common Code Smells vs Solutions

| Code Smell | Principle Violated | Solution |
|------------|-------------------|----------|
| God class doing everything | SRP | Split into focused classes |
| Public fields everywhere | Encapsulation | Use private fields + methods |
| Hard-coded dependencies | Loose Coupling | Dependency injection |
| Giant if/else for types | Extensibility | Strategy/polymorphism |
| Hard-coded paths | Portability | Config files + pathlib |
| Silent failures | Defensibility | Fail-fast with exceptions |
| 500-line function | Maintainability | Break into smaller functions |
| Copy-pasted code | DRY | Extract to function |
| Unused "future" code | YAGNI | Delete it! |

---

## Quick Decision Tree

```
Is my class doing more than one thing?
├─ Yes → Split it (SRP)
└─ No → ✓

Can clients modify my internal state?
├─ Yes → Make it private (Encapsulation)
└─ No → ✓

Am I creating dependencies inside my class?
├─ Yes → Inject them (Loose Coupling)
└─ No → ✓

Do I need to edit existing code to add features?
├─ Yes → Use strategy/plugin pattern (Extensibility)
└─ No → ✓

Do I have hard-coded paths or platform assumptions?
├─ Yes → Use pathlib and config (Portability)
└─ No → ✓

Am I accepting input without validation?
├─ Yes → Validate and fail-fast (Defensibility)
└─ No → ✓

Would this be hard to test?
├─ Yes → Separate logic from I/O (Testability)
└─ No → ✓

Am I adding abstractions "just in case"?
├─ Yes → Remove it (YAGNI/KISS)
└─ No → ✓

Am I repeating this logic?
├─ Yes → Extract it (DRY)
└─ No → ✓
```

---

## Python-Specific Tips

### Use Built-in Features

```python
# ✅ Good: Use pathlib
from pathlib import Path
path = Path("data") / "file.txt"

# ❌ Bad: String concatenation
path = "data" + "/" + "file.txt"
```

### Type Hints for Clarity

```python
# ✅ Good: Clear interface
def process(data: List[str]) -> Dict[str, int]:
    ...

# ❌ Bad: Mystery function
def process(data):
    ...
```

### Use ABC for Interfaces

```python
from abc import ABC, abstractmethod

class Notifier(ABC):
    @abstractmethod
    def send(self, message: str):
        pass
```

### Dataclasses for Data

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    email: str
    age: int
```

### Context Managers for Resources

```python
# ✅ Good: Automatic cleanup
with open('file.txt') as f:
    data = f.read()

# ❌ Bad: Manual cleanup
f = open('file.txt')
data = f.read()
f.close()  # Might be skipped on error!
```

---

## Remember

> "Any fool can write code that a computer can understand.
> Good programmers write code that humans can understand."
> — Martin Fowler

> "Simplicity is prerequisite for reliability."
> — Edsger W. Dijkstra

> "Make it work, make it right, make it fast."
> — Kent Beck

---
