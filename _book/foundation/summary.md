# {{ page.title }}

Computer networks, and in particular the Internet, have experienced
enormous growth over the past 30 years and are now able to provide a
wide range of services, from conducting business to providing access to
entertainment to enabling social networks. Much of this growth can be
attributed to the general-purpose nature of computer networks, and in
particular to the ability to add new functionality to the network by
writing software that runs on affordable, high-performance computers.
With this in mind, the overriding goal of this book is to describe
computer networks in such a way that when you finish reading it you
should feel that, if you had an army of programmers at your disposal,
you could actually build a fully functional computer network from the
ground up. This chapter lays the foundation for realizing this goal.

The first step we have taken toward this goal is to carefully identify
exactly what we expect from a network. For example, a network must first
provide cost-effective and scalable connectivity among a set of
computers. This is accomplished through a nested interconnection of
nodes and links and by sharing this hardware base through the use of
statistical multiplexing. This results in a packet-switched network, on
top of which we then define a collection of process-to-process
communication services.

The second step is to define a layered architecture that will serve as a
blueprint for our design. The central objects of this architecture are
network protocols. Protocols both provide a communication service to
higher-level protocols and define the form and meaning of messages
exchanged with their peers running on other machines. We have briefly
surveyed two of the most widely used architectures: the 7-layer OSI
architecture and the Internet architecture. This book most closely
follows the Internet architecture, both in its organization and as a
source of examples.

The third step is to implement the network's protocols and application
programs, usually in software. Both protocols and applications need an
interface by which they invoke the services of other protocols in the
network subsystem. The socket interface is the most widely used
interface between application programs and the network subsystem, but a
slightly different interface is typically used within the network
subsystem.

Finally, the network as a whole must offer high performance, where the
two performance metrics we are most interested in are latency and
throughput. As we will see in later chapters, it is the product of these
two metrics—the so-called delay $$\times$$ bandwidth product—that
often plays a critical role in protocol design.

## Further Reading

Computer networks are not the first communication-oriented technology to
have found their way into the everyday fabric of our society. For
example, the early part of the last century saw the introduction of the
telephone, and then during the 1950s television became widespread. When
considering the future of networking—how widely it will spread and how
we will use it—it is instructive to study this history. Our first
reference is a good starting point for doing this (the entire issue is
devoted to the first 100 years of telecommunications).

The second reference is considered one of the seminal papers on the
Internet architecture. The final two papers are not specific to
networking but present viewpoints that capture the "systems approach" of
this book. The Saltzer et al. paper motivates and describes one of the
most widely applied rules of network architecture—the *end-to-end
argument*—which continues to be highly cited today. The paper by
Mashey describes the thinking behind RISC (Reduced Instruction Set
Computer) architectures; as we will soon discover, making good judgments
about where to place functionality in a complex system is what system
design is all about.

- Pierce, J. Telephony—A personal view. *IEEE Communications*
    22(5):116-120, May 1984.

- Clark, D. The design philosophy of the DARPA Internet protocols.
    *Proceedings of the SIGCOMM '88 Symposium*, pages 106-114,
    August 1988.

- Saltzer, J., D. Reed, and D. Clark. End-to-end arguments in system
    design. *ACM Transactions on Computer Systems* 2(4):277-288,
    November 1984.

- Mashey, J. RISC, MIPS, and the motion of complexity. *UniForum 1986
    Conference Proceedings*, pages 116-124, February 1986.
