# {{ page.title }}

This chapter has begun to look at some of the issues involved in
building scalable and heterogeneous networks by using switches and
routers to interconnect links and networks. The most common use of
switching is to interconnection Ethernet segments. These L2 switches,
often called bridges, use techniques such as source address learning
to improve forwarding efficiency and spanning tree algorithms to avoid
looping. These switches are extensively used in data centers, campuses,
and corporate networks.

To deal with heterogeneous networks, the Internetworking Protocol (IP)
was invented and forms the basis of today's routers. IP tackles
heterogeneity by defining a simple, common service model for an
internetwork, which is based on the best-effort delivery of IP
datagrams. An important part of the service model is the global
addressing scheme, which enables any two nodes in an internetwork to
uniquely identify each other for the purposes of exchanging data. The IP
service model is simple enough to be supported by any known networking
technology, and the ARP mechanism is used to translate global IP
addresses into local link-layer addresses.

A crucial aspect of the operation of an internetwork is the
determination of efficient routes to any destination.
Internet routing algorithms solve this problem in a distributed fashion;
this chapter introduced the two major classes of algorithms—link-state
and distance-vector—along with examples of their application (RIP and
OSPF).

Both switches and routers need to forward packets from inputs to outputs
at a high rate and, in some circumstances, grow to a large size to
accommodate hundreds of ports. Building switches that both
scale and offer high performance at acceptable cost is complicated by
the problem of contention; as a consequence, switches and routers often
employ special-purpose hardware rather than being built from
general-purpose workstations.

## Further Reading

The seminal paper on bridges, in particular the spanning tree algorithm,
is the article by Perlman below. Not surprisingly, countless papers have
been written on various aspects of the Internet; the paper by Cerf and
Kahn is the one that originally introduced the TCP/IP architecture and
is worth reading for its historical perspective. Finally, McKeown's
paper, one of many on switch design, describes an approach to switch
design that uses cells internally but has been used commercially as the
basis for high-performance routers forwarding variable-length IP
packets.

- Perlman, R. An algorithm for distributed computation of spanning
    trees in an extended LAN. *Proceedings of the Ninth Data
    Communications Symposium*, pages 44-53, September 1985.

- Cerf, V., and R. Kahn. A protocol for packet network
    intercommunication. *IEEE Transactions on Communications*
    COM-22(5):637-648, May 1974.

- McKeown, N. The *i*SLIP scheduling algorithm for input-queued
    switches. *IEEE Transactions on Networking* 7(2):188-201,
    April 1999.
