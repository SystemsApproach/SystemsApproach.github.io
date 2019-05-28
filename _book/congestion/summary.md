# {{ page.title }}

As we have just seen, the issue of resource allocation is not only
central to computer networking, it is also a very hard problem. This
chapter has examined two aspects of resource allocation. The first,
congestion control, is concerned with preventing overall degradation of
service when the demand for resources by hosts exceeds the supply
available in the network. The second aspect is the provision of
different qualities of service to applications that need more assurances
than those provided by the best-effort model.

Most congestion-control mechanisms are targeted at the best-effort
service model of today's Internet, where the primary responsibility for
congestion control falls on the end nodes of the network. Typically, the
source uses feedback—either implicitly learned from the network or
explicitly sent by a router—to adjust the load it places on the
network; this is precisely what TCP's congestion-control mechanism does.

Independent of exactly what the end nodes are doing, the routers
implement a queuing discipline that governs which packets get
transmitted and which packets get dropped. Sometimes this queuing
algorithm is sophisticated enough to segregate traffic (e.g., WFQ); in
other cases, the router attempts to monitor its queue length and then
signals the source host when congestion is about to occur (e.g., RED
gateways and DECbit).

Emerging quality of service approaches aim to do substantially more than
just control congestion. Their goal is to enable applications with
widely varying requirements for delay, loss, and throughput to have
those requirements met through new mechanisms inside the network. The
Integrated Services (IntServ) approach allows individual application
flows to specify their needs to the routers using an explicit signalling
mechanism (RSVP), while Differentiated Services (DiffServ) assigns
packets into a small number of classes that receive differentiated
treatment in the routers.

## Further Reading

The recommended reading list for this chapter is long, reflecting the
breadth of interesting work being done in congestion control and
resource allocation. It includes the original papers introducing the
various mechanisms discussed in this chapter. In addition to a more
detailed description of these mechanisms, including thorough analysis of
their effectiveness and fairness, these papers are must reading because
of the insights they give into the interplay of the various issues
related to congestion control. In addition, the first paper gives a nice
overview of some of the early work on this topic, while the last is
considered one of the seminal papers in the development of QoS
capabilities in the Internet.

- Gerla, M., and L. Kleinrock. Flow control: A comparative survey.
    *IEEE Transactions on Communications* COM-28(4):553-573, April 1980.

- Demers, A., S. Keshav, and S. Shenker. Analysis and simulation of a
    fair queuing algorithm. *Proceedings of the SIGCOMM '89 Symposium*,
    pages 1-12, September 1989.

- Jacobson, V. Congestion avoidance and control. *Proceedings of the
    SIGCOMM '88 Symposium*, pages 314-329, August 1988.

- Floyd, S., and V. Jacobson. Random early detection gateways for
    congestion avoidance. *IEEE/ACM Transactions on Networking*
    1(4):397-413, August 1993.

- Clark, D., S. Shenker, and L. Zhang. Supporting real-time
    applications in an integrated services packet network: Architecture
    and mechanism. *Proceedings of the SIGCOMM '92 Symposium,* pages
    14-26, August 1992.

- Parekh, A. and R. Gallager. A generalized processor sharing approach
    to flow control in integrated services networks: The multiple node
    case. *IEEE/ACM Transactions on Networking* 2(2):137-150,
    April 1994.
