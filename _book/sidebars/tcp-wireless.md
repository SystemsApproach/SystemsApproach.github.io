<!--- [!Note|style:flat|label:When Loss Doesn't Mean Congestion|iconVisibility:hidden] --->
> **When Loss Doesn't Mean Congestion**
>
> There is one situation in which TCP congestion control has the
> potential to fail spectacularly. When a link drops packets at a
> relatively high rate due to bit errors—something that is fairly common
> on wireless links—TCP misinterprets this is a signal of congestion.
> Consequently, the TCP sender reduces its rate, which typically has no
> effect on the rate of bit errors, so the situation can continue until
> the send window drops to a single packet. At this point, the
> throughput achieved by TCP will deteriorate to one packet per round
> trip time, which may be much less than the appropriate rate for a
> network that is not actually experiencing congestion.
> 
> Given this situation, you may wonder how it is that TCP works at all
> over wireless networks. Fortunately, there are a number of ways to
> address the problem. Most commonly, some steps are taken at the link
> layer to reduce or hide packet losses due to bit errors. For example,
> 802.11 networks apply forward error correction (FEC) to the
> transmitted packets so that some number of errors can be corrected by
> the receiver. Another approach is to do link layer retransmission, so
> that even if a packet is corrupted and dropped, it eventually gets
> sent successfully, and the initial loss never becomes apparent to TCP.
> Each of these approaches have their problems: FEC wastes some
> bandwidth and will sometimes still fail to correct errors, while
> retransmission increases both the RTT of the connection and its
> variance, leading to worse performance.
> 
> Another approach used in some situations is to "split" the TCP
> connection into wireless and wired segments. There are many variations
> on this idea, but the basic approach is to treat losses on the wired
> segment as congestion signals but treat losses on the wireless segment
> as being caused by bit errors. This sort of technique has been used in
> satellite networks, where the RTT is so long already that you really
> don't want to make it any longer. Unlike the link-layer approaches,
> however, this one is a fundamental change to the end-to-end operation
> of the protocol; it also means that the forward and reverse paths of
> the connection have to pass through the same "middlebox" that is doing
> the splitting of the connection.
> 
> Another set of approaches try to distinguish intelligently between the
> two difference classes of loss, congestion and bit-errors. There are
> clues that losses are due to congestion such as increasing RTT and
> correlation among successive losses. ECN marking can also provide an
> indication that congestion is imminent, so a subsequent loss is more
> likely to be congestion-related. Clearly, if you can detect the
> difference between the two types of loss, then TCP doesn't need to
> reduce its window for for bit-error-related losses. Unfortunately, it
> is hard to make this determination with 100% accuracy.
