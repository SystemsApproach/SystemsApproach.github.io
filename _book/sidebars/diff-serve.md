<!--- [!Note|style:flat|label:Quiet Success of DiffServ|iconVisibility:hidden] --->
> **Quiet Success of DiffServ**
>
> As early as 2003, many people were ready to declare that DiffServ
> was dead. At that year's ACM SIGCOMM conference, one of the most
> prestigious networking research conferences, a workshop with the
> provocative title "RIPQOS" was held—the official name of the
> workshop was "Revisiting IP QoS" but the implication that QOS might be
> ready to rest in peace was clear in the workshop announcement.
> However, just as Mark Twain quipped that reports of his death were
> greatly exaggerated, it seems that the demise of IP QoS, and DiffServ
> in particular, was also overstated.
>
> Much of the pessimism about DiffServ arose from the fact that is had
> not been deployed to any significant extent by Internet Service
> Providers. Not only that, but the fact that real-time applications
> such as IP telephony and video streaming appear to be working so well
> over the Internet without any QoS mechanisms in place makes one wonder
> if any QoS will every be needed. In part this is the result of
> aggressive deployment of high bandwidth links and routers by many
> ISPs.
> 
> To see where DiffServ has succeeded, you need to look outside the ISP
> backbones. For example, corporations that have deployed IP telephony
> solutions—and there are over ten million "enterprise class" IP
> phones in use at the time of writing—routinely use "EF" behavior for
> the voice media packets to ensure that they are not delayed when
> sharing links with other traffic. The same holds for many residential
> voice-over-IP solutions: just to get priority on the upstream link out
> of the residence (e.g. the "slow" direction of a DSL link), it is
> common for the voice endpoint to set the DSCP to EF, and for a
> consumer's router connected to the broadband link to use DiffServ to
> give low latency and jitter to those packets.
> 
> There are other applications beside voice that are benefiting from
> IP-based video in the coming years will provide another driver. In
> general, two factors make DiffServ deployment worthwhile: a high
> demand for QoS assurance from the application, and a lack of assurance
> that the link bandwidth will be sufficient to deliver that QoS to
> *all* the traffic traversing the link. It is important to realize that
> DiffServ, like any other QoS mechanism, cannot create bandwidth—all
> it can do is ensure that what bandwidth there is gets preferentially
> allocated to the applications that have more demanding QoS needs.
