# {{ page.title }}

This chapter has described four very different end-to-end protocols. The
first protocol we considered is a simple demultiplexer, as typified by
UDP. All such a protocol does is dispatch messages to the appropriate
application process based on a port number. It does not enhance the
best-effort service model of the underlying network in any way—it
simply offers an unreliable, connectionless datagram service to
application programs.

The second type is a reliable byte-stream protocol, and the specific
example of this type that we looked at is TCP. The challenges faced with
such a protocol are to recover from messages that may be lost by the
network, to deliver messages in the same order in which they are sent,
and to allow the receiver to do flow control on the sender. TCP uses the
basic sliding window algorithm, enhanced with an advertised window, to
implement this functionality. The other item of note for this protocol
is the importance of an accurate timeout/retransmission mechanism.
Interestingly, even though TCP is a single protocol, we saw that it
employs at least five different algorithms—sliding window, Nagle,
three-way handshake, Karn/Partridge, and Jacobson/Karels—all of which
can be of value to any end-to-end protocol.

The third type of transport protocol we looked at is request/reply
protocols that form the basis for RPC. Such protocols must dispatch
requests to the correct remote procedures and match replies to the
corresponding requests. They may additionally provide reliability, such
as at-most-once semantics, or support large message sizes by message
fragmentation and reassembly.

Finally, we looked at transport protocols for the class of applications
that involve multimedia data (such as audio and video) and that have a
requirement for real-time delivery. Such a transport protocol needs to
provide help with recovering the timing information of a single media
stream and with synchronizing multiple media streams. It also needs to
provide information to upper layers (e.g., the application layer) about
lost data (since there will normally not be enough time to retransmit
lost packets) so that appropriate application-specific recovery and
congestion avoidance methods can be employed. The protocol that has been
developed to meet these needs is RTP, which includes a companion control
protocol called *RTCP*.

## Further Reading

There is no doubt that TCP is a complex protocol and that in fact it has
subtleties not illuminated in this chapter; therefore, the recommended
reading list for this chapter includes the original TCP specification.
Our motivation for including this specification is not so much to fill
in the missing details as to expose you to what an honest-to-goodness
protocol specification looks like. The next paper, by Birrell and
Nelson, is the seminal paper on RPC. Third, the paper by Clark and
Tennenhouse on protocol architecture introduced the concept of
*Application Layer Framing* which inspired the design of RTP; this paper
provides considerable insight into the challenges of designing protocols
as application needs change.

- USC-ISI. Transmission Control Protocol. *Request for Comments* 793,
    September 1981.

- Birrell, A., and B. Nelson. Implementing remote procedure calls.
    *ACM Transactions on Computer Systems* 2(1):39-59, February 1984.

- Clark, D., and D. Tennenhouse. Architectural considerations for a
    new generation of protocols. *Proceedings of the SIGCOMM '90
    Symposium*, pages 200-208, September 1990.
