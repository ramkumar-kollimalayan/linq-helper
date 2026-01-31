# First vs Single

Choosing between `First` and `Single` is one of the most common LINQ confusions.

---

## First

**Returns the first element that matches a condition.**

### When to use
- When you just need the first matching item
- When order matters
- When multiple matches are acceptable

### When NOT to use
- When you expect exactly one item
- When the collection might be empty

### Common mistake
- Using `First()` when no element exists (throws exception)

```csharp
var activeUser = users.First(u => u.IsActive);

---

## ✅ Step 5: Update README to link it

Edit `README.md` and add:

```md
## LINQ Comparisons

- [First vs Single](methods/first-vs-single.md)
