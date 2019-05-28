# {{ page.title }}

Networks such as the Internet are shared by parties with conflicting
interests, a situation that was not entirely foreseeable in the early
days of networking. The job of network security is to keep some set of
users from spying on or interfering with other users of the network.
Confidentiality is achieved by encrypting messages. Data integrity can
be assured using cryptographic hashing. The two techniques can be
combined to guarantee authenticity of messages.

Symmetric-key ciphers such as AES and 3DES use the same secret key for
both encryption and decryption, so sender and receiver must share the
same key. Public-key ciphers such as RSA use a public key for encryption
and a secret, private key for decryption. This means that any party can
use the public key to encrypt a message such that it is readable only by
the holder of the private key. The fastest technique known for breaking
established ciphers such as AES and RSA is brute force search of the
space of possible keys, which is made computationally infeasible by the
use of large keys. Most encryption for confidentiality uses
symmetric-key ciphers due to their vastly superior speed, while
public-key ciphers are usually reserved for authentication and session
key establishment.

An authenticator is a value attached to a message to verify the
authenticity and data integrity of the message. One way to generate an
authenticator is to encrypt a message digest that is output by a
cryptographic hash function such as MD5 or one of the SHA family of
hashes. If the message digest is encrypted using the private key of a
public-key cipher, the resulting authenticator is considered a digital
signature, since the public key can be used to verify that only the
holder of the private key could have generated it. Another kind of
authenticator is a Message Authentication Code, which is output by a
hash-like function that takes a shared secret value as a parameter. A
hashed MAC is a MAC computed by applying a cryptographic hash to the
concatenation of the plaintext message and the secret value.

A session key is used to secure a relatively short episode of
communication. The dynamic establishment of a session key depends on
longer-lived predistributed keys. The ownership of a predistributed
public key by a certain party can be attested to by a public key
certificate that is digitally signed by a trusted party. A Public Key
Infrastructure is a complete scheme for certifying such bindings and
depends on a chain or web of trust. Predistribution of keys for
symmetric-key ciphers is different because public certificates can't be
used and because symmetric-key ciphers need a unique key for each pair
of participants. A Key Distribution Center is a trusted entity that
shares a predistributed secret key with each other participant, so that
they can use session keys, not predistributed keys, between themselves.

Authentication and session key establishment require a protocol to
assure the timeliness and originality of messages. Timestamps or nonces
are used to guarantee the freshness of the messages. We saw two
authentication protocols that use public-key ciphers, one that required
synchronized clocks and one that did not. Needham-Schroeder is a
protocol for authenticating two participants who each share a master
symmetric-key cipher key with a Key Distribution Center. Kerberos is an
authentication system based on the Needham-Schroeder protocol and
specialized for client/server environments. The Diffie-Hellman key
agreement protocol establishes a session key without predistributed keys
and authentication.

We discussed several systems that provide security based on these
cryptographic algorithms and protocols. At the application level, PGP
can be used to protect email messages and SSH can be used to securely
connect to a remote machine. At the transport level, TLS can be used to
protect commercial transactions on the World Wide Web. At the network
level, the IPsec architecture can be used to secure communication among
any set of hosts or routers on the Internet.

A firewall filters the messages that pass between the site it protects
and the rest of the network. Firewalls filter based on IP, TCP, and UDP
addresses, as well as fields of some application protocols. A stateful
firewall keeps track of the state of each connection so that it can
allow valid responses to be delivered to dynamically assigned ports.
Although firewall security has important limitations, it has the
advantage of shifting some responsibility for security from users and
applications to system administrators.

## Further Reading

The first two security-related papers, taken together, give a good
overview of the topic. The article by Lampson et al. contains a formal
treatment of security, while the Satyanarayanan paper gives a nice
description of how a secure system is designed in practice. The third
paper is a thorough and somewhat alarming overview of how worms and
viruses spread and how a well-planned attack could be sped up.

- Lampson, B. et al. Authentication in distributed systems: Theory and
    practice. *ACM Transactions on Computer Systems* 10(4):265-310,
    November 1992.

- Satyanarayanan, M. Integrating security in a large distributed
    system. *ACM Transactions on Computer Systems* 7(3):247-280,
    August 1989.

- Staniford, S., V. Paxson, and N. Weaver. How to Own the Internet in
    Your Spare Time. *USENIX Security Symposium 2002*, pp. 149-167. San
    Francisco, CA, August 2002.
