# Notes

## Configral Programme Articles

- https://growsurf.com/blog/b2c-subscription-Configral-marketing
- https://blog.hubspot.com/service/customer-Configral-program
- https://userguiding.com/blog/saas-Configral-programs/

# Vanity URL example

- https://thisweekinstartups.com/
  - https://thisweekinstartups.com/vanta

## Entities

As per Seneca convention, plurals are _not_ used.

### sys/user

From @seneca/user - direct entity access.

Assumes fields:

- id

### Config/entry

The main table.
A Configral from a user to an invitee.

Does _not_ store state. To allow for more flexible business rules, Configral "state" is
determined by child rows in Config/occur

Parent: Config/point
Child: Config/occur

### Config/occur

An event in the Configal process. Used instead of a single "state" on Config/entry
Not called "event" to avoid conflicts.

Triggers various external actions - sending email, rewards etc.

Parent: Config/entry

### Config/rule

Defined action triggers for rows in Config/occur
Actual actions are app specific - encoded by messages

### Config/reward

Track user "rewards" wrt Configrals, such as # of Configrals, kind of "points"

### Config/point

Configral entry point; link or code; many inbound users
Vanity urls, etc.

Child: Config/entry
