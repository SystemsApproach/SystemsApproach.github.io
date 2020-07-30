=====================
sphinxcontrib-seqdiag
=====================

.. image:: https://travis-ci.org/blockdiag/sphinxcontrib-seqdiag.svg?branch=master
   :target: https://travis-ci.org/blockdiag/sphinxcontrib-seqdiag

.. image:: https://coveralls.io/repos/blockdiag/sphinxcontrib-seqdiag/badge.png?branch=master
   :target: https://coveralls.io/r/blockdiag/sphinxcontrib-seqdiag?branch=master

.. image:: https://codeclimate.com/github/blockdiag/sphinxcontrib-seqdiag/badges/gpa.svg
   :target: https://codeclimate.com/github/blockdiag/sphinxcontrib-seqdiag

A sphinx extension for embedding sequence diagram using seqdiag_.

This extension enables you to insert sequence diagrams into your document.
Following code is an example::

   .. seqdiag::

      seqdiag {
        browser => webserver => database;
      }

.. _seqdiag: http://bitbucket.org/blockdiag/seqdiag/


For more details, see `online documentation`_ at http://blockdiag.com/.

.. _online documentation: http://blockdiag.com/en/seqdiag/sphinxcontrib.html


